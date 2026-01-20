let wishes = [];

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, wish_message } = req.body || {};

    if (!name || !wish_message) {
        return res.status(400).json({ error: "Thiếu dữ liệu" });
    }

    wishes.push({
        name,
        message: wish_message,
        time: new Date().toISOString()
    });

    res.json({ success: true });
}
