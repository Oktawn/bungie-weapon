import { config } from "dotenv";
import { Knex } from "knex";
config();

class ResDto {
    id: string;
    name: string;
    icon: string;
    watermark: string;
}

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("weapons").del();

    // Inserts seed entries
    // console.log(process.env.WEAPON_LITE_URL)
    const res = await fetch(process.env.WEAPON_LITE_URL);
    if (!res.ok)
        throw new Error("Failed to fetch weapons");

    const data: ResDto[] = await res.json();

    await knex("weapons").insert(data.map(item => ({
        id: item.id,
        name: item.name,
        icon: item.icon,
        watermark: item.watermark
    })));


};
