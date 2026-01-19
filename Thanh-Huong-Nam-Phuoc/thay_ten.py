import re
import os

def replace_names(content):
    # Thay đầy đủ trước
    content = re.sub(r'\bhttps://static.ladipage.net/6833feb01c8070001239a3de/finalogo-20241104054341-wpwqp-removebg-preview-20241116060353-xv1qa-20250616131140-6t3fy.png\b', 'https://sf-static.upanhlaylink.com/img/image_20260119bb56a245b1bf37aa37f177d186056567.jpg', content, flags=re.IGNORECASE)


    return content


def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = replace_names(content)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print("Đã xử lý:", file_path)


# Xử lý 1 file
process_file("index.php")
