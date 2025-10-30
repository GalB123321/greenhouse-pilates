import type { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .id('root')
    .title('ניהול תוכן')
    .items([
      // Singleton - Home Page
      S.listItem()
        .id('homePage')
        .title('🏠 דף הבית')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('דף הבית')
        ),
      
      S.divider(),
      
      // Show all other document types that aren't manually listed
      ...S.documentTypeListItems().filter(
        listItem => !['homePage'].includes(listItem.getId() as string)
      ),
    ])