# تقویم فارسی فن آورد
پاسخ به سوال شماره یک
تقویم طراحی شده به زبان جاوا برای اندروید با استفاده از نرم افزار اندروید استدیو
به همراه
*  ویجت
*  کتابخانه,
*  نشان دادن مناسبت‌ها در تقویم,
*  و..


نحوه استفاده از کتابخانه
-----
اضافه کردن به xml 

```xml
<com.solid.mohsen.month_lib.MonthHolderView
        android:id="@+id/calendarView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        />
```

سپس در برنامه

```java
Calendar nextYear = Calendar.getInstance();
nextYear.add(Calendar.YEAR, 1);

mMonthPagerView = (MonthHolderView) findViewById(R.id.calendarView);
Calendar start = Calendar.getInstance();
start.add(Calendar.YEAR, -1);
Calendar end = Calendar.getInstance();
end.add(Calendar.YEAR, 1);
mMonthPagerView.init(start, end)
        .setDay(today)
```

در حالت عدی تقویم افقی نمایش داده میشود برای عمودی
```java
mMonthPagerView.init(start, end)
        .setDay(today)
        .setVerticaliy()
```

سایر توابع

```java
mMonthPagerView.init(start, end)
           .setDay(today)
           .setVerticaliy()
           .displayOnly()
           .setCalendarPadding(30, 15, 5)
           .setCalendarFontSize(20, 14, 24)
           .setCalendarItemColor(R.color.month_color_2, R.color.week_color_2,
                   R.color.divider_color_2, R.color.day_color_2, R.color.selector_color_2, 0)
           .setCalendarRowHight(32)
           .selectionMode(MonthHolderView.SelectionMode.RANGE);
```

در xml


```xml
   <com.solid.mohsen.month_lib.MonthHolderView
        android:layout_width="match_parent"
        android:id="@+id/calendarView"
        android:background="@color/ct_light_gray"
        android:layout_height="wrap_content"
        app:onlyCalendar='false'
        app:calendarOrient="horizontal"
        app:monthTitleColor="@color/month_color_1"
        app:dividerColor="@color/divider"
        app:weekDayColor="@color/week_color_1"
        app:dayColor="@color/day_color_1"
        app:selectedDayColor="@color/white"
        app:selectedDayBackgroundColor="@color/selector_color_1"
        app:fontSizeDay="22sp"
        app:rowHight="32dp"
        app:weekDayPadding="18dp"
        app:calendarDayPadding="5dp"
        app:monthTxtPadding="5dp"
        app:monthTxtSize="25sp"
        app:weekDayTxtSize="12sp"
        app:unAvailableDayColor="@color/background_light"
          />
```
ویجت برنامه
-----

برای ویجت از برنامه
[ویجت](https://github.com/romannurik/Android-MonthCalendarWidget)
 استفاده شده است


ایمیل
-----

mohsen.ashouri.ms@gmail.com


کتابخانه های مورد استفاده در برنامه
-----

*    'com.android.support:appcompat-v7:25.0.0'
*    'com.android.support:recyclerview-v7:25.0.0'
*    'com.android.support:design:25.0.0'
*    'com.android.support:support-v4:25.0.0'
*    'com.android.support:cardview-v7:25.0.0'
