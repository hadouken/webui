var lang = [
	  "קבצי טורנט||*.torrent|| כל הקבצים(*.*)||*.*||"
	, "אישור"
	, "ביטול"
	, "החל"
	, "העדפות"
	, "שפה:"
	, "פרטיות"
	, "בדוק עדכונים אוטומטית"
	, "עדכן גם לגירסאות בטא"
	, "שלח מידע אנונימי כשבודקים לעדכונים"
	, "כאשר מורידים"
	, "הוסף .!ut לקבצים לא שלמים"
	, "הקצה מקום מראש לכל הקבצים"
	, "מנע מצב המתנה אם יש טורנטים פעילים"
	, "בקש אישור בעת מחיקת קבצים"
	, "צבע רקע רשימה חלופי"
	, "הצג מהירות נוכחית בכותרת החלון"
	, "בהוספת טורנטים"
	, "לא להתחיל את ההורדה אוטומאטית"
	, "מיקום של הקבצים המורדים"
	, "שים הורדות חדשות ב:"
	, "תמיד הראה חלון בהוספה ידנית"
	, "העבר הורדות שהושלמו ל:"
	, "הוסף את תווית הטורנט:"
	, "העבר רק מתיקיית ברירת המחדל של ההורדות"
	, "מיקום קבצי טורנט"
	, "אחסן קבצי טורנט ב:"
	, "העבר קבצי טורנט של עבודות שהושלמו אל:"
	, "טען קבצי טורנט אוטומאטית מ:"
	, "מחק טורנטים טעונים"
	, "פורט האזנה"
	, "פורט לחיבורים נכנסים:"
	, "פורט אקראי"
	, "בחר פורט אקראי בכל הפעלה"
	, "אפשר מיפוי פורטים UPnP"
	, "אפשר מיפוי פורטים NAT-PMP"
	, "שרת פרוקסי"
	, "סוג:"
	, "פרוקסי:"
	, "פורט:"
	, "אימות"
	, "שם משתמש:"
	, "סיסמה:"
	, "פענח שמות דומיין דרך פרוקסי "
	, "השתמש בפרוקסי בחיבורים בין עמיתים"
	, "הוסף חריגה לפיירוול של וינדוז"
	, "קצב הגבלת העלאה גלובלית"
	, "[קצב העלאה (ק\"ב/ש) [0: ללא הגבלה"
	, "אוטומטית"
	, ":(מהירות העלאה חלופית כאשר לא מורידים (ק\"ב/ש"
	, "הגבלת קצב הורדה גלובאלית"
	, "[קצב הורדה מירבי (ק\"ב/ש) [0: ללא הגבלה"
	, "מספר של חיבורים"
	, "הגבלה גלובאלית של מספר חיבורים"
	, "מספר חיבורים מקסימלי של משתמשים לטורנט"
	, "מספר הקצאות העלאה לכל טורנט:"
	, "השתמש בהקצאות נוספות להעלאה אם מהירות העלאה < 90%"
	, "תכונות ביטורנט בסיסיות"
	, "אפשר רשת DHT"
	, "בקש מידע סקרייפ מהטראקר"
	, "אפשר DHT לטורנטים חדשים"
	, "אפשר החלפה בין עמיתים"
	, "אפשר גילוי עמיתים מקומיים"
	, "הגבל רוחב פס לעמיתים מקומיים"
	, "כתובת אייפי/שם לדיווח לטראקר"
	, "הצפנת פרוטוקול"
	, "יוצא:"
	, "אפשר חיבורים נכנסים מסוג ישן"
	, "אפשר הגבלת מהירות"
	, "הגדרות הגבלה"
	, "הפסק טורנט כאשר:"
	, "השגה"
	, "לאחרונה"
	, "ימים"
	, "הגדרות תור"
	, "(מספר טורנטים פעילים מירבי(העלאה או הורדה:"
	, "מספר הורדות פעילות מירבי:"
	, "[העלה בזמן [ערכים ברירת מחדל"
	, "רטיו הוא:  <="
	, "%   או זמן העלאה הוא:"
	, "משימות העלאה מקבלות עדיפות גבוהה ממשימות הורדה"
	, "כאשר יוטורנט מגיע למטרת ההעלאה"
	, "[הגבל את שיעור ההעלאה ל(ק\"ב/ש): [0: עצור"
	, "אפשר מתזמן"
	, "לוח תזמונים"
	, "הגדרות מתזמן"
	, "הגבלת שיעור ההעלאה (ק\"ב/ש):"
	, "הגבלת שיעור ההורדה (ק\"ב/ש):"
	, "בטל DHT כאשר מכובה"
	, "אפשר ממשק רשת"
	, "אימות"
	, "שם משתמש"
	, "סיסמה:"
	, "אפשר חשבון אורח עם שם משתמש"
	, "קישוריות"
	, "(פורט האזנה חלופי(ברירת מחדל הוא הפורט בחיבור:"
	, "(הגבל גישה לכתובות הבאות(הגבל ערכים מרובים עם פסיק:"
	, "[!הגדרות מתקדמות [אזהרה: אל תשנה"
	, "ערך:"
	, "אמת"
	, "שקר"
	, "הגדר"
	, "[ | תוויות קבועות [הפרד תוויות מרובות עם תו"
	, "[מנועי חיפוש [פורמט: שם|לינק"
	, "הגדרות מטמון בסיסיות"
	, "מטמון הדיסק משמש לשמירת מידע שנגיש לעיתים קרובות בזיכרון כדי להפחית את מספר הקריאות והכתיבות לכונן. יוטורנט בדרך כלל מנהלת את המטמון אוטומטית, אבל אתה יכול לשנות התנהגות זאת על ידי שינוי הגדרות אלה"
	, "עקוף גודל מטמון אוטומטי וציין גודל מטמון ידנית (MB):"
	, "הפחת שימוש בזיכרון מטמון כאשר זיכרון מטמון לא נדרש"
	, "הגדרות מטמון מתקדמות"
	, "אפשר מטמון של דיסק ושמירות"
	, "העתק מתוך בלוקים חדשים כל שתי דקות"
	, "העתק חתיכות שהושלמו באופן מיידי"
	, "אפשר מטמון של דיסק וקריאות"
	, "בטל קריאה ממטמון אם מהירות העלאה נמוכה"
	, "הסר בלוקים ישנים מהמטמון"
	, "הגדל זיכרון מטמון אוטומטית כאשר זיכרון מטמון מתמלא"
	, "בטל כתיבות מטמון של דיסק של וינדוז"
	, "בטל קריאות מטמון של דיסק של וינדוז"
	, "‏‫אפשרויות הטורנט"
	, "(טראקרים(הפרד שורות עם קו ריק"
	, "הגדרות רוחב פס"
	, "[מהירות העלאה מקסימלית (ק\"ב\ש): [0: ברירת מחדל"
	, "[מהירות הורדה מקסימלית (ק\"ב\ש): [0: ברירת מחדל"
	, "[מספר של הקצאות העלאה: [0: ברירת מחדל"
	, "זרע בזמן"
	, "עקוף הגדרות ברירת מחדל"
	, "רטיו הוא:  <="
	, "%  או זמן העלאה הוא:"
	, "הגדרות אחרות"
	, "העלאה ראשונית"
	, "אפשר DHT"
	, "החלפת עמיתים"
	, "מוכן"
	, "שם"
	, "%"
	, "עדיפות"
	, "גודל"
	, "דלג"
	, "נמוך"
	, "רגיל"
	, "גבוה"
	, "התקבל:"
	, "נשלח:"
	, "מעלים:"
	, "נשאר:"
	, "מהירות הורדה:"
	, "מהירות העלאה:"
	, "מורידים:"
	, "יחס שיתוף:"
	, "האש:"
	, "הועבר"
	, "‏‫מחוברים %d מתוך %d (‏‫%d בקבוצה)"
	, "D:%s U:%s - %s"
	, "הצג רשימת קטגוריות"
	, "הצג מידע מפורט"
	, "איפוס"
	, "אל תוריד"
	, "עדיפות גבוהה"
	, "עדיפות נמוכה"
	, "עדיפות רגילה"
	, "‏‫מחק קבצים"
	, "הכרח בדיקה חוזרת"
	, "הפעלה מאולצת"
	, "תווית"
	, "‏‫השהה"
	, "מאפיינים"
	, "הורד למטה ברשימת הורדות"
	, "העלה למעלה ברשימת הורדות"
	, "‏‫הסר"
	, "הסר ו"
	, "התחל"
	, "עצור"
	, "(פעיל)"
	, "(הכל)"
	, "(הושלם)"
	, "(מוריד)"
	, "(לא פעיל)"
	, "(ללא תווית)"
	, "||זמינות||זמינות"
	, "מוכן"
	, "התקבל"
	, "מהירות הורדה"
	, "זמן נותר"
	, "תווית"
	, "שם"
	, "'מס"
	, "מורידים"
	, "נשאר"
	, "מעלים"
	, "מעלים/מורידים"
	, "יחס"
	, "גודל"
	, "מצב"
	, "נשלח"
	, "מהירות העלאה"
	, "?את האם אתה בטוח שאתה רוצה להסיר את כל %d הטורנטים הנבחרים ואת כל הקבצים המשוייכים אליהם"
	, "האם אתה בטוח שאתה רוצה להסיר את הטורנט הנבחר ואת כל ההקבצים המשוייכים אליו?"
	, "?האם אתה בטוח שאתה רוצה להסיר את %d הטורנטים הנבחרים"
	, "?האם אתה בטוח שאתה רוצה להסיר את הקובץ הנבחר"
	, "‏‫נבדק %:.1d%%"
	, "מוריד"
	, "שגיאה: %s"
	, "הסתיים"
	, "מושהה"
	, "בתור"
	, "‏‫בתור לשיתוף"
	, "העלאה"
	, "נעצר"
	, "הכנס תווית"
	, ":הכנס תווית עבור טורנטים שנבחרו"
	, "תווית חדשה..."
	, "הסר תווית"
	, "כללי||טראקרים||משתמשים||חתיכות||קבצים||מהירות||רשומות||"
	, "הוסף טורנט"
	, "הוסף טורנט מקישור URL"
	, "השהה"
	, "העדפות"
	, "הזז למטה בתור הורדות"
	, "הזז למעלה בתור הורדות"
	, "הסר"
	, "הפעלה"
	, "עצור"
	, "B"
	, "EB"
	, "GB"
	, "kB"
	, "MB"
	, "PB"
	, "TB"
	, "מתקדם"
	, "רוחב פס"
	, "חיבור"
	, "מטמון דיסק"
	, "תיקיות"
	, "כללי"
	, "מתזמן משימות"
	, "עמידה בתור"
	, "ביטורנט"
	, "ממשק רשת"
	, "הגבלת מהירות"
	, "מבוטל||מאופשר||מאולץ||"
	, "(ללא)||Socks4||Socks5||HTTPS||HTTP||"
	, "העלאות||הורדות||העלאה + הורדה||"
	, "MB||GB||"
	, "1||2||5||7||10||14||15||20||21||28||30||31||"
	, "שם"
	, "ערך"
	, "ב||ג||ד||ה||ו||ש||א||"
	, "שני||שלישי||רביעי||חמישי||שישי||שבת||ראשון||"
	, "מהירות מלאה"
	, "מהירות מלאה - השתמש בנורמלי גלובלי הגבלות רוחב פס"
	, "מוגבל"
	, "מוגבל - משתמש במתזמן-מצויין הגבלות רוחב פס"
	, "העלאה בלבד "
	, "העלאה בלבד- רק העלה קבצים (כולל לא שלמים)"
	, "מכובה"
	, "כבה- עצור כל הטורנטים שלא במצב הכרח הורדה"
	, "<= שעות %d"
	, "(התעלם)"
	, "<=  דקות%d"
	, "%dh %dm"
	, "%dh %dm"
	, "%dm %ds"
	, "%ds"
	, "%dy %dw"
	, "%dy %dw"
];