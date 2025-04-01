// پس از لود کامل صفحه:
window.addEventListener('DOMContentLoaded', () => {
    // تمام تگ‌های <formula> صفحه را انتخاب می‌کنیم:
    const formulaElements = document.querySelectorAll('formula');
  
    // تمام ورودی‌های متنی را انتخاب می‌کنیم:
    const textInputs = document.querySelectorAll('input[type="text"]');
  
    // برای هر ورودی، هنگام تغییر (input event) محاسبات را آپدیت می‌کنیم
    textInputs.forEach(input => {
      input.addEventListener('input', () => {
        updateAllFormulas();
      });
    });
  
    // ابتدا یک بار همگی را آپدیت می‌کنیم تا اگر مقدار پیش‌فرضی وجود داشت محاسبه شود
    updateAllFormulas();
  
    /**
     * این تابع، مقدار تمام <formula>ها را بر اساس عبارت evaluator محاسبه و به‌روزرسانی می‌کند
     */
    function updateAllFormulas() {
      formulaElements.forEach(formulaEl => {
        updateFormula(formulaEl);
      });
    }
  
    /**
     * این تابع، فرمول داخل یک المان <formula> را محاسبه می‌کند
     * و در صورت موفقیت نتیجه را نشان می‌دهد، در غیر این صورت پیام خطا نمایش می‌دهد
     */
    function updateFormula(formulaElement) {
      const expression = formulaElement.getAttribute('evaluator');
      let expressionToEval = expression;
  
      // گام 1: جایگزین کردن شناسه‌های ورودی با مقادیر آنها
      textInputs.forEach(input => {
        const id = input.id; 
        const val = parseFloat(input.value) || 0; // اگر مقدار نامعتبر یا خالی باشد، 0 در نظر می‌گیریم
        // برای جلوگیری از جایگزینی تصادفی (مثلاً اگر ID یک زیررشته باشد)، از regex با \b استفاده می‌کنیم
        const pattern = new RegExp(`\\b${id}\\b`, 'g');
        expressionToEval = expressionToEval.replace(pattern, val);
      });
  
      // گام 2: تلاش برای evaluate کردن عبارت
      try {
        // اگر عبارت معتبر نباشد یا مشکلی در ارجاع مقادیر وجود داشته باشد، در بلاک catch می‌افتد
        const result = eval(expressionToEval);
        // بررسی اینکه نتیجه NaN نشود
        if (isNaN(result)) {
          formulaElement.textContent = "Invalid Formula";
        } else {
          formulaElement.textContent = result;
        }
      } catch (error) {
        // در صورت بروز هرگونه خطا (مانند سینتکس اشتباه در فرمول):
        formulaElement.textContent = "Invalid Formula";
      }
    }
  });
  