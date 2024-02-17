import { writeFile } from "fs/promises";
import { join } from "path";

export default async function uploadImage(image: File) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join("./", "public/upload", image.name);
    await writeFile(path, buffer);
}
