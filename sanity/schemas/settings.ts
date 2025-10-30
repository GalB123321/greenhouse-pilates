import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'הגדרות אתר',
  type: 'document',
  
  fields: [
    defineField({
      name: 'studioName',
      title: 'שם הסטודיו',
      type: 'string',
      description: 'השם המלא של הסטודיו',
      initialValue: 'הבית הירוק - סטודיו לפילאטיס',
      validation: Rule => Rule.required().max(60)
    }),
    
    defineField({
      name: 'tagline',
      title: 'סלוגן',
      type: 'string',
      description: 'משפט קצר שמתאר את הסטודיו',
      initialValue: 'מקום של תנועה, נשימה ויציבות',
      validation: Rule => Rule.max(100)
    }),
    
    defineField({
      name: 'address',
      title: 'כתובת',
      type: 'text',
      rows: 3,
      description: 'הכתובת המלאה של הסטודיו',
      validation: Rule => Rule.required()
    }),
    
    defineField({
      name: 'addressLink',
      title: 'קישור למפה',
      type: 'url',
      description: 'קישור ל-Google Maps או Waze',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    
    defineField({
      name: 'phone',
      title: 'טלפון',
      type: 'string',
      description: 'מספר הטלפון הראשי',
      validation: Rule => Rule.required().regex(/^[\d-+().\s]+$/, {
        name: 'phone',
        invert: false
      })
    }),
    
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'מספר WhatsApp (אם שונה מהטלפון הראשי)',
      validation: Rule => Rule.regex(/^[\d-+().\s]+$/, {
        name: 'phone',
        invert: false
      })
    }),
    
    defineField({
      name: 'email',
      title: 'אימייל',
      type: 'string',
      description: 'כתובת האימייל הראשית',
      validation: Rule => Rule.required()
    }),
    
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'קישור לעמוד האינסטגרם',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'קישור לעמוד הפייסבוק',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    
    defineField({
      name: 'workingHours',
      title: 'שעות פעילות',
      type: 'object',
      fields: [
        {
          name: 'sunday',
          title: 'ראשון',
          type: 'string'
        },
        {
          name: 'monday',
          title: 'שני',
          type: 'string'
        },
        {
          name: 'tuesday',
          title: 'שלישי',
          type: 'string'
        },
        {
          name: 'wednesday',
          title: 'רביעי',
          type: 'string'
        },
        {
          name: 'thursday',
          title: 'חמישי',
          type: 'string'
        },
        {
          name: 'friday',
          title: 'שישי',
          type: 'string'
        },
        {
          name: 'saturday',
          title: 'שבת',
          type: 'string',
          initialValue: 'סגור'
        }
      ]
    }),
    
    defineField({
      name: 'seo',
      title: 'הגדרות SEO',
      type: 'object',
      fields: [
        {
          name: 'metaDescription',
          title: 'תיאור מטא',
          type: 'text',
          rows: 3,
          description: 'תיאור האתר למנועי חיפוש (עד 160 תווים)',
          validation: Rule => Rule.max(160)
        },
        {
          name: 'keywords',
          title: 'מילות מפתח',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'מילות מפתח לקידום אורגני'
        },
        {
          name: 'ogImage',
          title: 'תמונה לשיתוף',
          type: 'image',
          description: 'התמונה שתופיע בשיתוף ברשתות חברתיות'
        }
      ]
    }),
    
    defineField({
      name: 'footerText',
      title: 'טקסט לתחתית האתר',
      type: 'text',
      rows: 3,
      description: 'טקסט קצר שמופיע בתחתית כל עמוד'
    }),
    
    defineField({
      name: 'maintenanceMode',
      title: 'מצב תחזוקה',
      type: 'boolean',
      description: 'הפעלת מצב תחזוקה באתר',
      initialValue: false
    })
  ],
  
  preview: {
    select: {
      title: 'studioName',
      subtitle: 'tagline'
    },
    prepare(selection) {
      return {
        ...selection,
        title: 'הגדרות אתר'
      }
    }
  }
})