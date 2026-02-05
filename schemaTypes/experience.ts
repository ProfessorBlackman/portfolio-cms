import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'role',
            title: 'Job Role',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            hidden: ({ document }) => document?.isCurrent as boolean,
        }),
        defineField({
            name: 'isCurrent',
            title: 'Is Current Role?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'achievements',
            title: 'Achievements',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'role',
            subtitle: 'company',
        },
    },
})
