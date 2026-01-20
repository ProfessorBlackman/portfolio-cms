import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Profile Image',
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
            name: 'shortBio',
            title: 'Short Bio',
            type: 'text',
            rows: 3,
            description: 'Used in the Hero section',
        }),
        defineField({
            name: 'fullBio',
            title: 'Full Bio',
            type: 'text',
            description: 'Used in the About section',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            fields: [
                { name: 'github', type: 'url', title: 'GitHub URL' },
                { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
                { name: 'twitter', type: 'url', title: 'Twitter/X URL' },
            ]
        }),
        defineField({
            name: 'resume',
            title: 'Resume/CV',
            type: 'file',
        }),
    ],
})
