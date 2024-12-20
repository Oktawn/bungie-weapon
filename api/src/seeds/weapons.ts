import axios from "axios";
import { config } from "dotenv";
import { Knex } from "knex";
config();

class ResDto {
    id: string;
    name: string;
    icon: string;
    watermark: string;
}

export async function handlerData(itemType: number) {
    try {
        const res = (await axios.get(process.env.WEAPON_URL))
            .data.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition;
        const jsonData = (await axios.get(process.env.BNG_URL + res)).data;
        const filterItem = [];
        for (const item in jsonData) {
            if (jsonData[item].itemType === itemType) {
                filterItem.push({
                    id: item,
                    name: jsonData[item].displayProperties.name,
                    icon: jsonData[item].displayProperties.icon,
                    watermark: jsonData[item].iconWatermark
                });
            }
        }
        return filterItem;
    } catch (error) {
        console.log(error);
    }


}

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("weapons").del();

    // Inserts seed entries
    const data: ResDto[] = await handlerData(3);
    await knex("weapons").insert(data.map(item => ({
        id: item.id,
        name: item.name,
        icon: item.icon,
        watermark: item.watermark
    })));

};
