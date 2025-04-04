# دستگرمی اول - تگ با حساب و کتاب

این پروژه برای تمرین برنامه‌نویسی وب طراحی شده است و شامل یک صفحه HTML برای نمایش چندین ورودی و تگ سفارشی `<formula>` است که در آن فرمول موردنظر تعریف می‌شود. با تغییر هر ورودی، بلافاصله نتیجه فرمول محاسبه و در محل تگ `<formula>` نمایش داده می‌شود.

---

## اجزای پروژه

1. **فایل HTML (index.html)**  
   - حاوی سه نمونه فرمول مختلف (شامل محاسبه هزینه خرید با تخفیف، میانگین دو عدد و مساحت یک مستطیل)  
   - در هر بخش تعدادی ورودی داریم که شناسه (ID) منحصربه‌فرد دارند.  
   - سپس تگ `<formula>` با ویژگی `evaluator` معرفی می‌شود که داخل آن فرمول موردنظر با استفاده از نام همان شناسه‌ها نوشته شده است.  

2. **فایل CSS (style.css)**  
   - شامل استایل پایه برای زیباسازی و چیدمان عناصر صفحه است.  
   - به نحوی طراحی شده که صفحه به شکل ساده، منسجم و تا حدی واکنش‌گرا (Responsive) باشد.

3. **فایل JavaScript (app.js)**  
   - شامل کد اصلی محاسبه است.  
   - پس از لود شدن کامل صفحه، اسکریپت ابتدا همه‌ی تگ‌های `<formula>` و ورودی‌های متنی را پیدا می‌کند.  
   - با هر بار تغییر در یکی از ورودی‌ها، تمام فرمول‌ها دوباره محاسبه می‌شوند.  
   - هر فرمول، بر اساس مقدار ویژگی `evaluator` (مثلاً "count * fee - discount") و با جایگزینی مقدار هر ورودی (بر اساس id آن) در متن فرمول، محاسبه می‌گردد.  
   - در صورت نامعتبر بودن فرمول یا مقادیر، نتیجه "Invalid Formula" نمایش داده می‌شود.
