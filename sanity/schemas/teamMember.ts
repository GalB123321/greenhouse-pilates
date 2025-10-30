import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'צוות',
  type: 'document',
  
  fields: [
    defineField({
      name: 'name',
      title: 'שם מלא',
      type: 'string',
      validation: Rule => Rule.required().max(50)
    }),
    
    defineField({
      name: 'role',
      title: 'תפקיד',
      type: 'string',
      options: {
        list: [
          { title: 'מדריכת פילאטיס', value: 'pilates' },
          { title: 'מדריכת יוגה', value: 'yoga' },
          { title: 'מדריכת צ׳יקונג', value: 'qigong' },
          { title: 'מנהלת הסטודיו', value: 'manager' },
          { title: 'מטפלת', value: 'therapist' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    
    defineField({
      name: 'photo',
      title: 'תמונה',
      type: 'image',
      description: 'תמונת פורטרט של חבר/ת הצוות',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'תיאור תמונה (נגישות)',
          validation: Rule => Rule.required()
        }
      ]
    }),
    
    defineField({
      name: 'bio',
      title: 'ביוגרפיה',
      type: 'text',
      rows: 6,
      description: 'ספרי על הרקע, הניסיון וההכשרה',
      validation: Rule => Rule.required().min(100).max(800)
    }),
    
    defineField({
      name: 'shortBio',
      title: 'תיאור קצר',
      type: 'string',
      description: 'משפט או שניים לתצוגה מקוצרת',
      validation: Rule => Rule.max(150)
    }),
    
    defineField({
      name: 'qualifications',
      title: 'הכשרות והסמכות',
      type: 'array',
      description: 'רשימת ההכשרות וההסמכות',
      of: [{ type: 'string' }],
      validation: Rule => Rule.min(1)
    }),
    
    defineField({
      name: 'specialties',
      title: 'התמחויות',
      type: 'array',
      description: 'תחומי התמחות מיוחדים',
      of: [{ type: 'string' }]
    }),
    
    defineField({
      name: 'yearsOfExperience',
      title: 'שנות ניסיון',
      type: 'number',
      validation: Rule => Rule.min(0).max(50)
    }),
    
    defineField({
      name: 'email',
      title: 'אימייל',
      type: 'string',
      description: 'כתובת אימייל ליצירת קשר (אופציונלי)'
    }),
    
    defineField({
      name: 'phone',
      title: 'טלפון',
      type: 'string',
      description: 'מספר טלפון ליצירת קשר (אופציונלי)',
      validation: Rule => Rule.regex(/^[\d-+().\s]+$/, {
        name: 'phone',
        invert: false
      })
    }),
    
    defineField({
      name: 'order',
      title: 'סדר תצוגה',
      type: 'number',
      description: 'מספר נמוך יותר מופיע קודם',
      initialValue: 100,
      validation: Rule => Rule.required().min(0)
    }),
    
    defineField({
      name: 'isActive',
      title: 'פעיל/ה',
      type: 'boolean',
      description: 'האם להציג את חבר/ת הצוות באתר',
      initialValue: true
    })
  ],
  
  orderings: [
    {
      title: 'סדר תצוגה',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    },
    {
      title: 'לפי שם',
      name: 'nameAsc',
      by: [
        { field: 'name', direction: 'asc' }
      ]
    }
  ],
  
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
      isActive: 'isActive',
      order: 'order'
    },
    prepare(selection: any) {
      const { title, subtitle, isActive, order } = selection
      const roleLabels: { [key: string]: string } = {
        pilates: 'מדריכת פילאטיס',
        yoga: 'מדריכת יוגה',
        qigong: 'מדריכת צ׳יקונג',
        manager: 'מנהלת הסטודיו',
        therapist: 'מטפלת'
      }
      return {
        ...selection,
        subtitle: `${roleLabels[subtitle] || subtitle}${!isActive ? ' (לא פעיל)' : ''} • סדר: ${order}`
      }
    }
  }
})