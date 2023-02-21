import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Sider',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      title: 'identifikasjon',
      name: 'id',
      type: 'string',
      description: 'Identifisere siden, Må IKKE ENDRES',
      readOnly: ({document}) => !!document?._createdAt,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
