import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export default defineType({
    name: "caseStudy",
    title: "Case Study",
    type: "document",
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),

        // Metadata section
        defineField({
            name: "overview",
            title: "Executive Summary",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "client",
            title: "Client / Organization",
            type: "string",
        }),

        defineField({
            name: "author",
            title: "Author",
            type: "string",
        }),

        defineField({
            name: "date",
            title: "Publication Date",
            type: "date",
        }),

        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
        }),

        // Research-style structure

        defineField({
            name: "problem",
            title: "Problem Statement",
            type: "array",
            of: [
                { type: 'block' },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                { type: "image" }
            ],
        }),

        defineField({
            name: "background",
            title: "Background / Context",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "methodology",
            title: "Research Methodology",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "investigation",
            title: "Investigation / Research Process",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "findings",
            title: "Key Findings",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "solution",
            title: "Proposed Solution",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "implementation",
            title: "Implementation Process",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "results",
            title: "Results & Outcomes",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "metrics",
            title: "Metrics / Data Highlights",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "label", type: "string", title: "Label" },
                        { name: "value", type: "string", title: "Value" },
                    ],
                },
            ],
        }),

        defineField({
            name: "media",
            title: "Supporting Media",
            type: "array",
            of: [
                { type: "image", options: { hotspot: true } },
                {
                    type: "object",
                    name: "video",
                    title: "Video",
                    fields: [
                        {
                            name: "url",
                            title: "Video URL (YouTube, Vimeo, etc.)",
                            type: "url",
                        },
                        {
                            name: "caption",
                            type: "string",
                            title: "Caption",
                        },
                    ],
                },
            ],
        }),

        defineField({
            name: "conclusion",
            title: "Conclusion",
            type: "array",
            of: [
                { type: 'block' },
                {
                    name: 'csvTable',
                    title: 'CSV Table',
                    type: 'csvTable',
                    description: 'For CSV table data',
                },
                {
                    type: "code",
                    name: "code",
                    title: "Code",
                    options: {
                        withFilename: true,
                        language: "javascript",
                        languageAlternatives: [
                            { value: "javascript", title: "JavaScript" },
                            { value: "python", title: "Python" },
                            { value: "java", title: "Java" },
                            { value: "dart", title: "Dart" },
                            { value: "typescript", title: "TypeScript" },
                            { value: "c#", title: "C#" },
                            { value: "go", title: "Go" },
                            { value: "rust", title: "Rust" },
                            { value: "swift", title: "Swift" },
                            { value: "kotlin", title: "Kotlin" },
                            { value: "scala", title: "Scala" },
                            { value: "elixir", title: "Elixir" },
                            { value: "erlang", title: "Erlang" },
                            { value: "sql", title: "SQL" },
                            { value: "html", title: "HTML" },
                            { value: "css", title: "CSS" },
                            { value: "shell", title: "Shell" },
                            { value: "json", title: "JSON" },
                            { value: "xml", title: "XML" },
                            { value: "yaml", title: "YAML" },
                            { value: "markdown", title: "Markdown" },
                            { value: "mermaid", title: "Mermaid" },
                        ]
                    }
                },

                { type: "image" }
            ],
        }),

        defineField({
            name: "references",
            title: "References / Citations",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "title", type: "string", title: "Title" },
                        { name: "author", type: "string", title: "Author" },
                        { name: "link", type: "url", title: "Link (optional)" },
                        { name: "year", type: "string", title: "Year" },
                    ],
                },
            ],
        }),

        // Optional appendix
        defineField({
            name: "appendix",
            title: "Appendix",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: 'duration',
            type: 'string',
            title: 'Duration',
        }),

        // SEO
        defineField({
            name: "seoDescription",
            title: "SEO Description",
            type: "text",
            rows: 3,
        }),
    ],

    preview: {
        select: {
            title: "title",
            subtitle: "client",
            media: "coverImage",
        },
    },
});
