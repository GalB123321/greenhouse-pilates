import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'דף הבית',
  type: 'document',
  

  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        {
          name: 'video',
          title: 'וידאו רקע',
          type: 'file',
          description: 'וידאו לרקע Hero (MP4, מומלץ עד 10MB)',
          options: {
            accept: 'video/*'
          }
        },
        {
          name: 'image',
          title: 'תמונת רקע (גיבוי)',
          type: 'image',
          description: 'תמונה במקרה שאין וידאו או שהוא לא נטען',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'תיאור תמונה (נגישות)',
            }
          ]
        },
        {
          name: 'inspirationalText',
          title: 'משפט השראה ראשון',
          type: 'string',
          description: 'המשפט שמופיע בתחילה על הוידאו',
          initialValue: 'תנועו מתוך אהבה, לא מתוך פחד',
          validation: Rule => Rule.required().max(100)
        },
        {
          name: 'transitionText',
          title: 'משפט מעבר',
          type: 'string',
          description: 'המשפט שמופיע לפני הכפתור',
          initialValue: 'זוזו בדרך שלכם',
          validation: Rule => Rule.required().max(100)
        },
        {
          name: 'ctaButtonText',
          title: 'טקסט כפתור CTA',
          type: 'string',
          description: 'הטקסט על הכפתור',
          initialValue: 'מלאו שאלון היכרות',
          validation: Rule => Rule.required().max(30)
        },
        {
          name: 'ctaButtonLink',
          title: 'קישור כפתור CTA',
          type: 'string',
          description: 'לאן הכפתור מוביל',
          initialValue: '/questionnaire',
          validation: Rule => Rule.required()
        }
      ]
    }),
    
    // Content Box Section
    defineField({
      name: 'contentBox',
      title: 'קופסת תוכן',
      type: 'object',
      group: 'hero',
      fields: [
        {
          name: 'logo',
          title: 'לוגו',
          type: 'image',
          description: 'הלוגו של הסטודיו',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'תיאור לוגו (נגישות)',
              initialValue: 'הבית הירוק'
            }
          ]
        },
        {
          name: 'subtitle',
          title: 'כותרת משנה',
          type: 'string',
          description: 'סוגי השיעורים',
          initialValue: 'פילאטיס • יוגה • תנועה • קהילה',
          validation: Rule => Rule.required().max(100)
        },
        {
          name: 'location',
          title: 'מיקום',
          type: 'string',
          description: 'מיקום הסטודיו',
          initialValue: 'אביחיל',
          validation: Rule => Rule.required().max(50)
        },
        {
          name: 'secondaryCtaText',
          title: 'כפתור CTA משני',
          type: 'string',
          description: 'הכפתור בתחתית קופסת התוכן',
          initialValue: 'צרו קשר'
        },
        {
          name: 'secondaryCtaLink',
          title: 'קישור כפתור CTA משני',
          type: 'string',
          description: 'לאן הכפתור המשני מוביל',
          initialValue: '/contact'
        }
      ]
    }),

    // Story Section
    defineField({
      name: 'storyTitle',
      title: 'כותרת - הסיפור שלנו',
      type: 'string',
      group: 'story',
      initialValue: 'הסיפור שלנו'
    }),
    
    defineField({
      name: 'storyText',
      title: 'טקסט - הסיפור שלנו',
      type: 'text',
      group: 'story',
      rows: 6,
      description: 'ספרי על הסטודיו והמסע שלך'
    }),
    
    // Philosophy Section
    defineField({
      name: 'philosophyTitle',
      title: 'כותרת - הפילוסופיה',
      type: 'string',
      group: 'philosophy',
      initialValue: 'הפילוסופיה שלנו'
    }),
    
    defineField({
      name: 'philosophyText',
      title: 'טקסט - הפילוסופיה',
      type: 'text',
      group: 'philosophy',
      rows: 6,
      description: 'הגישה והערכים שמנחים אותך'
    }),
    
    // Community Section
    defineField({
      name: 'communityTitle',
      title: 'כותרת - הקהילה',
      type: 'string',
      group: 'community',
      initialValue: 'הקהילה שלנו'
    }),
    
    defineField({
      name: 'communityText',
      title: 'טקסט - הקהילה',
      type: 'text',
      group: 'community',
      rows: 6,
      description: 'על הקהילה שנוצרה בסטודיו'
    }),
  ],
  
  groups: [
    {
      name: 'hero',
      title: 'אזור ראשי',
      default: true
    },
    {
      name: 'story',
      title: 'הסיפור שלנו'
    },
    {
      name: 'philosophy',
      title: 'הפילוסופיה'
    },
    {
      name: 'community',
      title: 'הקהילה'
    }
  ],
  
  preview: {
    select: {
      title: 'contentBox.subtitle',
      media: 'contentBox.logo'
    },
    prepare(selection) {
      return {
        ...selection,
        title: 'דף הבית'
      }
    }
  }
})