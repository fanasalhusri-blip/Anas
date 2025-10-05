
//  بداية الداونلود للصفحة

$(document).ready(function () {

    // للإظهار والإخفاء التفاصيل
    $(".toggle-details").click(function () {

        
        let row = $(this).closest("tr");
       
        let detailsRow = row.next(".details");

       
        // إظهار/إخفاء التفاصيل
        detailsRow.toggle();


        // تغيير نص الزر
        if (detailsRow.is(":visible")) {
            $(this).text("إخفاء التفاصيل");
        } else {
            $(this).text("إظهار التفاصيل");
        }
    });


    //  التحقق من نموذج الإدخال 
    $("#appForm").submit(function (event) {

        event.preventDefault(); 

        let appName = $("#appName").val().trim(); 

        let company = $("#company").val().trim();
        let website = $("#website").val().trim();

        let free = $("#free").val();
        let field = $("#field").val();

        let description = $("#description").val().trim();

        
        //اإنكليزي فقط بدون فراغات أو أرقام

        let regexAppName = /^[A-Za-z]+$/;

        if (!regexAppName.test(appName)) {
            alert("!!! اسم التطبيق يجب أن يكون باللغة الإنكليزية فقط وبدون فراغات أو أرقام.");
            return;
        }

        
        //  (إنكليزي فقط)

        let regexCompany = /^[A-Za-z\s]+$/;

        if (!regexCompany.test(company)) {

            alert(" اسم الشركة يجب أن يكون باللغة الإنكليزية فقط.");
            return;
        }


        // التحقق من الموقع 

        try {
            new URL(website);
        } catch (_) {
            alert("الرجاء إدخال رابط صحيح وفعال");
            return;
        }

        // التحقق من بقية الحقول
        if (free === "" || field === "" || description === "") {
            alert(" الرجاء ملئ جميع الحقول");
            return;
        }


        // في حال كان كل شيئ صحيح

        alert("تم إدخال جميع معلومات التطبيق بنجاح ");

       
        // تعليمة الانتقال لصفحة التطبيقات 
        window.location.href = "apps.html";

    });
    
});
