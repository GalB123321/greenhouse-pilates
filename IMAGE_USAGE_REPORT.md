# דו"ח שימוש בתמונות - הבית הירוק

## 📊 סיכום כללי
- **סך הכל תמונות במערכת:** 24 תמונות
- **סך הכל וידאו:** 1 וידאו (tal.MOV - 10.9MB)
- **קטגוריות:** 6 קטגוריות ראשיות

## 📁 פירוט לפי קטגוריות

### 1. Hero (3 תמונות)
**נתיב:** `/images/hero/`
- `hero-ronit-field.jpg` - **בשימוש כ-fallback** - רונית בשדה פרחים צהובים
- `hero-1.jpg` - זמין לשימוש
- `hero-2.jpg` - זמין לשימוש

**וידאו בשימוש:**
- `/videos/tal.MOV` - **כרגע בשימוש בדף הבית**

### 2. Studio (4 תמונות)
**נתיב:** `/images/studio/`
- `studio-1.jpg` - **בשימוש ב-StorySection**
- `studio-2.jpg` - זמין לשימוש
- `studio-3.jpg` - זמין לשימוש
- `studio-4.jpg` - זמין לשימוש

### 3. Classes (7 תמונות)
**נתיב:** `/images/classes/`
- `class-reformer-group.jpg` - **בשימוש ב-ClassesSection** (שיעור 1)
- `class-1.jpg` - **בשימוש ב-ClassesSection** (שיעור 2)
- `class-2.jpg` - **בשימוש ב-ClassesSection** (שיעור 3)
- `class-3.jpg` - **בשימוש ב-ClassesSection** (שיעור 4)
- `class-4.jpg` - **בשימוש ב-ClassesSection** (שיעור 5)
- `class-5.jpg` - זמין לשימוש
- `class-6.jpg` - זמין לשימוש

### 4. Instructors (4 תמונות)
**נתיב:** `/images/instructors/`
- `instructor-1.jpg` - **בשימוש ב-InstructorsSection** (רונית ליבנת)
- `instructor-2.jpg` - **בשימוש ב-InstructorsSection** (דפנה לוי)
- `instructor-3.jpg` - **בשימוש ב-InstructorsSection** (עידן ריישר שקד)
- `instructor-4.jpg` - **בשימוש ב-InstructorsSection** (כרמית שחר)

### 5. Community (4 תמונות)
**נתיב:** `/images/community/`
- `community-outdoor-group.jpg` - **בשימוש ב-CommunitySection** (גלריה)
- `community-group-hug.jpg` - **בשימוש ב-CommunitySection** (גלריה)
- `community-1.jpg` - **בשימוש ב-CommunitySection** (גלריה)
- `community-2.jpg` - זמין לשימוש

### 6. Details (2 תמונות)
**נתיב:** `/images/details/`
- `detail-1.jpg` - זמין לשימוש
- `detail-2.jpg` - זמין לשימוש

## 🎯 שימוש נוכחי ברכיבים

### רכיבים פעילים:
1. **Hero Component**
   - וידאו: `/videos/tal.MOV`
   - תמונת fallback: `hero-ronit-field.jpg`

2. **StorySection**
   - תמונה: `studio-1.jpg`

3. **PhilosophySection**
   - ללא תמונות (עיצוב מינימליסטי)

4. **BenefitsSection**
   - ללא תמונות (אייקונים בלבד)

5. **ClassesSection**
   - 5 תמונות מקטגוריית classes (אינדקס 0-4)

6. **CommunitySection**
   - 3 תמונות מקטגוריית community (אינדקס 0-2)

7. **InstructorsSection**
   - 4 תמונות מקטגוריית instructors (כולן בשימוש)

8. **CTASection**
   - ללא תמונות (רקע צבע מלא)

9. **Footer**
   - ללא תמונות

10. **Navbar**
    - ללא תמונות

## 💡 המלצות

### תמונות לא מנוצלות (7 תמונות):
- 2 תמונות hero
- 3 תמונות studio
- 2 תמונות classes
- 1 תמונת community
- 2 תמונות details

### הצעות לשימוש:
1. **תמונות Details** - אפשר להוסיף לעמודים פנימיים או לגלריה נוספת
2. **תמונות Studio נוספות** - אפשר להוסיף carousel ב-StorySection
3. **תמונות Hero נוספות** - אפשר לרוטציה אקראית או carousel
4. **תמונות Classes נוספות** - אפשר להרחיב את מקטע השיעורים

### אופטימיזציה:
- מומלץ להמיר את `tal.MOV` ל-MP4 לביצועים טובים יותר
- לשקול דחיסת תמונות לטעינה מהירה יותר
- להוסיף גרסאות responsive לתמונות גדולות

## 📝 הערות
- כל התמונות מאורגנות היטב בתיקיות נפרדות
- יש מערכת ניהול תמונות מרכזית ב-`lib/images.ts`
- העיצוב המינימליסטי מנצל היטב את התמונות הקיימות
- הוידאו נטען כברירת מחדל עם fallback לתמונה