import os

def count_lines_and_chars_in_file(file_path):
    line_count = 0
    char_count = 0
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
        for line in file:
            line_count += 1
            char_count += len(line)
    return line_count, char_count

def count_lines_and_chars_in_directory(directory):
    total_lines = 0
    total_chars = 0
    for root, dirs, files in os.walk(directory):
        for file_name in files:
            file_path = os.path.join(root, file_name)
            try:
                lines, chars = count_lines_and_chars_in_file(file_path)
                total_lines += lines
                total_chars += chars
            except Exception as e:
                print(f"Не удалось прочитать файл: {file_path}. Ошибка: {e}")
    return total_lines, total_chars

if __name__ == "__main__":
    directory = os.path.dirname(os.path.abspath(__file__))
    total_lines, total_chars = count_lines_and_chars_in_directory(directory)
    print(f"Общее количество строк во всех файлах в директории: {total_lines}")
    print(f"Общее количество символов во всех файлах в директории: {total_chars}")
