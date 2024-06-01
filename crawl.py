import requests
from bs4 import BeautifulSoup
import csv

url = "https://today.jnu.ac.kr/Program/MealPlan.aspx"

# requests를 사용하여 웹 페이지의 HTML 코드를 가져옴
response = requests.get(url)
html = response.text

# BeautifulSoup 객체를 생성하여 HTML을 파싱
soup = BeautifulSoup(html, "lxml")

# CSV파일 쓰기모드로 열기
with open("menu.csv", "w", newline="", encoding="cp949") as file:
    writer = csv.writer(file)
    writer.writerow(["날짜", "구분", "메뉴"])

    # 제1학생마루식당 조식-한식
    for i in range(1, 6):
        li = []

        cell = soup.select(
            f"#form1 > div.meal > div:nth-child(1) > div:nth-child(6) > table > tbody > tr:nth-child({i}) > td.food_month"
        )
        row = [c.text.strip() for c in cell]
        li.append(row)

        li.append("제1학생마루(1생) 아침")

        cell = soup.select(
            f"#form1 > div.meal > div:nth-child(1) > div:nth-child(6) > table > tbody > tr:nth-child({i}) > td:nth-child(3)"
        )
        row = [c.text.strip() for c in cell]
        li.append(row)

        writer.writerow(li)

    # 제1학생마루식당 중식-한식
    for i in range(1, 6):
        li = []

        cell = soup.select(
            f"#form1 > div.meal > div:nth-child(1) > div:nth-child(10) > table > tbody > tr:nth-child({i}) > td.food_month"
        )
        row = [c.text.strip() for c in cell]
        li.append(row)

        li.append("제1학생마루식당(1생) 점심 - 한식")

        cell = soup.select(
            f"#form1 > div.meal > div:nth-child(1) > div:nth-child(10) > table > tbody > tr:nth-child({i}) > td:nth-child(3)"
        )
        row = [c.text.strip() for c in cell]
        li.append(row)

        writer.writerow(li)

    # 제1학생마루식당 중식-일품
    for i in range(1, 6):
        li = []

        cell = soup.select(
            f"#form1 > div.meal > div:nth-child(1) > div:nth-child(12) > table > tbody > tr:nth-child({i}) > td.food_month"
        )
        row = [c.text.strip() for c in cell]
        li.append(row)

        li.append("제1학생마루식당(1생) 점심 - 일품")

        cell = soup.select(
            f"#form1 > div.meal > div:nth-child(1) > div:nth-child(12) > table > tbody > tr:nth-child({i}) > td:nth-child(3)"
        )
        row = [c.text.strip() for c in cell]
        li.append(row)

        writer.writerow(li)

    # 제1학생마루식당 석식-한식
    for i in range(1, 6):
        li = []

        cell = soup.select(
            f"#form1 > div.meal > div:nth-child(1) > div:nth-child(14) > table > tbody > tr:nth-child({i}) > td.food_month"
        )
        row = [c.text.strip() for c in cell]
        li.append(row)

        li.append("제1학생마루식당 저녁")

        cell = soup.select(
            f"#form1 > div.meal > div:nth-child(1) > div:nth-child(14) > table > tbody > tr:nth-child({i}) > td:nth-child(3)"
        )
        row = [c.text.strip() for c in cell]
        li.append(row)

        writer.writerow(li)

    # # 학동-명학회관(학생) 중식-정식
    # for i in range(1, 6):
    #     li = []

    #     cell = soup.select(
    #         f"#form1 > div.meal > div:nth-child(4) > div:nth-child(4) > table > tbody > tr:nth-child({i}) > td.food_month"
    #     )
    #     row = [c.text.strip() for c in cell]
    #     li.append(row)

    #     li.append("학동-명학회관(학생) 중식-정식")

    #     cell = soup.select(
    #         f"#form1 > div.meal > div:nth-child(4) > div:nth-child(4) > table > tbody > tr:nth-child({i}) > td:nth-child(3)"
    #     )
    #     row = [c.text.strip() for c in cell]
    #     li.append(row)

    #     writer.writerow(li)

    # # 학동-명학회관(학생) 중식-일품
    # for i in range(1, 6):
    #     li = []

    #     cell = soup.select(
    #         f"#form1 > div.meal > div:nth-child(4) > div:nth-child(6) > table > tbody > tr:nth-child({i}) > td.food_month"
    #     )
    #     row = [c.text.strip() for c in cell]
    #     li.append(row)

    #     li.append("학동-명학회관(학생) 중식-일품")

    #     cell = soup.select(
    #         f"#form1 > div.meal > div:nth-child(4) > div:nth-child(6) > table > tbody > tr:nth-child({i}) > td:nth-child(3)"
    #     )
    #     row = [c.text.strip() for c in cell]
    #     li.append(row)

    #     writer.writerow(li)

    # # 학동-명학회관(교직원) 중식-한식
    # for i in range(1, 6):
    #     li = []

    #     cell = soup.select(
    #         f"#form1 > div.meal > div:nth-child(5) > div > table > tbody > tr:nth-child({i}) > td.food_month"
    #     )
    #     row = [c.text.strip() for c in cell]
    #     li.append(row)

    #     li.append("학동-명학회관(교직원) 중식-한식")

    #     cell = soup.select(
    #         f"#form1 > div.meal > div:nth-child(5) > div > table > tbody > tr:nth-child({i}) > td:nth-child(3)"
    #     )
    #     row = [c.text.strip() for c in cell]
    #     li.append(row)

    #     writer.writerow(li)
