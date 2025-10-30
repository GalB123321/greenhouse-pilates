import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'class',
  title: 'שיעורים',
  type: 'document',
  
  fields: [
    defineField({
      name: 'title',
      title: 'שם השיעור',
      type: 'string',
      description: 'למשל: פילאטיס מכשירים, פילאטיס מזרן',
      validation: Rule => Rule.required().max(50)
    }),
    
    defineField({
      name: 'slug',
      title: 'כתובת URL',
      type: 'slug',
      description: 'תיווצר אוטומטית מהכותרת',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .trim()
      },
      validation: Rule => Rule.required()
    }),
    
    defineField({
      name: 'description',
      title: 'תיאור השיעור',
      type: 'text',
      rows: 5,
      description: 'הסבר מפורט על השיעור, למי הוא מתאים וכו׳',
      validation: Rule => Rule.required().min(50).max(500)
    }),
    
    defineField({
      name: 'image',
      title: 'תמונה',
      type: 'image',
      description: 'תמונה שמייצגת את השיעור',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'תיאור תמונה (נגישות)',
          description: 'תיאור קצר של התמונה',
          validation: Rule => Rule.required()
        }
      ]
    }),
    
    defineField({
      name: 'benefits',
      title: 'יתרונות השיעור',
      type: 'array',
      description: 'רשימת היתרונות של השיעור',
      of: [{ type: 'string' }],
      validation: Rule => Rule.min(3).max(6)
    }),
    
    defineField({
      name: 'duration',
      title: 'משך השיעור (בדקות)',
      type: 'number',
      description: 'למשל: 50 או 60',
      initialValue: 50,
      validation: Rule => Rule.required().min(30).max(90)
    }),
    
    defineField({
      name: 'level',
      title: 'רמת קושי',
      type: 'string',
      options: {
        list: [
          { title: 'מתחילים', value: 'beginner' },
          { title: 'בינוניים', value: 'intermediate' },
          { title: 'מתקדמים', value: 'advanced' },
          { title: 'כל הרמות', value: 'all' }
        ],
        layout: 'radio'
      },
      initialValue: 'all',
      validation: Rule => Rule.required()
    }),
    
    defineField({
      name: 'maxParticipants',
      title: 'מספר משתתפים מקסימלי',
      type: 'number',
      description: 'כמה אנשים יכולים להשתתף בשיעור',
      validation: Rule => Rule.min(1).max(20)
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
      name: 'featured',
      title: 'שיעור מומלץ',
      type: 'boolean',
      description: 'האם להציג בעמוד הבית כשיעור מומלץ',
      initialValue: false
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
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    }
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'level',
      media: 'image',
      featured: 'featured',
      order: 'order'
    },
    prepare(selection) {
      const { title, subtitle, featured, order } = selection
      const levelLabels = {
        beginner: 'מתחילים',
        intermediate: 'בינוניים',
        advanced: 'מתקדמים',
        all: 'כל הרמות'
      }
      return {
        ...selection,
        subtitle: `${levelLabels[subtitle] || subtitle}${featured ? ' ⭐ מומלץ' : ''} • סדר: ${order}`
      }
    }
  }
})