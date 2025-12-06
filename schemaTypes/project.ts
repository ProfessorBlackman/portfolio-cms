import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'liveUrl',
            title: 'Live URL',
            type: 'url',
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'techStack',
            title: 'Tech Stack',
            type: 'object',
            fields: [
                {
                    name: 'frontend',
                    title: 'Frontend',
                    type: 'array',
                    of: [{ type: 'string' }]
                },
                {
                    name: 'backend',
                    title: 'Backend',
                    type: 'array',
                    of: [{ type: 'string' }]
                },
                {
                    name: 'database',
                    title: 'Database',
                    type: 'array',
                    of: [{ type: 'string' }]
                },
                {
                    name: 'others',
                    title: 'Others',
                    type: 'array',
                    of: [{ type: 'string' }]
                },
            ]
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Completed', value: 'Completed' },
                    { title: 'In Progress', value: 'In Progress' },
                    { title: 'Planned', value: 'Planned' },
                ],
            },
            initialValue: 'Completed',
        }),
        defineField({
            name: 'architecture',
            title: 'Architecture Description',
            type: 'text',
        }),
    ],
})
