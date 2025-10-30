# מדריך וידאו לאתר הבית הירוק

## 📹 הוספת וידאו לאתר

### קבצי וידאו קיימים:
- `tal.MOV` - וידאו מטל (10.9MB)

### המלצות לפורמט וידאו:

#### מפרט טכני מומלץ:
- **פורמט:** MP4 (H.264 codec) - תואם לכל הדפדפנים
- **רזולוציה:** 1920x1080 (Full HD) מינימום
- **משך:** 10-30 שניות בלופ עובד הכי טוב
- **גודל קובץ:** עד 10MB לביצועים אופטימליים
- **FPS:** 24-30 פריימים לשנייה

#### כלים להמרה ודחיסה:
1. **HandBrake** (חינמי) - https://handbrake.fr/
   - בחרי Preset: "Web > Gmail Large 3 Minutes 720p30"
   - או "Web > Discord Nitro Large 3-6 Minutes 1080p30"

2. **Adobe Media Encoder** (אם יש לך)
   - Export כ-H.264
   - Bitrate: 5-8 Mbps

3. **אונליין חינמי:**
   - https://www.freeconvert.com/video-compressor
   - https://cloudconvert.com/

### איך להמיר את tal.MOV ל-MP4:

```bash
# אם יש לך ffmpeg מותקן:
ffmpeg -i tal.MOV -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k tal.mp4

# או עם HandBrake:
1. פתחי את HandBrake
2. גררי את tal.MOV לחלון
3. בחרי Preset: "Web Optimized"
4. לחצי Start
```

### מאיפה להשיג תוכן וידאו:
- תכני אינסטגרם של טל
- צילומי סטודיו מקצועיים
- צילומי שיעורים (עם אישור התלמידים)
- צילומי אווירה של הסטודיו

### טיפים לצילום:
- צלמי באור טבעי (בוקר/אחה"צ)
- שמרי על מצלמה יציבה (השתמשי בחצובה)
- צלמי אופקית (לא אנכית)
- הימנעי מזום דיגיטלי

### שמות קבצים מומלצים:
- `hero-video.mp4` - וידאו ראשי לדף הבית
- `classes-pilates.mp4` - וידאו שיעורי פילאטיס
- `studio-atmosphere.mp4` - אווירת הסטודיו
- `community-moments.mp4` - רגעי קהילה

### הוספת וידאו לאתר:
1. המירי את הקובץ ל-MP4
2. שמרי בתיקיית `public/videos/`
3. עדכני את `app/page.tsx`:
```javascript
videoUrl="/videos/hero-video.mp4"
```

## 🎬 שימוש נוכחי:
הוידאו בדף הבית משתמש ב:
- וידאו ראשי: `/videos/tal.MOV` (או הגרסה הממומרת)
- תמונת fallback: תמונת הרקע במקרה שהוידאו לא נטען