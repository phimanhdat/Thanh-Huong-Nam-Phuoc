let rsvps = [];

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, is_attending, guest_count, message } = req.body || {};

    if (!name || !is_attending) {
        return res.status(400).json({ error: "Thiếu dữ liệu" });
    }

    rsvps.push({
        name,
        status: is_attending,
        guest: Number(guest_count || 1),
        message,
        time: new Date().toISOString()
    });

    res.json({ success: true });
}
