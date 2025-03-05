export interface DocSection {
    id: string
    title: string
    items: DocItem[]
  }
  
  export interface DocItem {
    id: string
    title: string
    href: string
  }
  
  export interface DocContent {
    id: string
    title: string
    content: string
    images: DocImage[]
  }
  
  export interface DocImage {
    id: string
    alt: string
    src: string
  }
  
  // This would typically come from a database
  export const docSections: DocSection[] = [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        {
          id: "introduction",
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          id: "installation",
          title: "Installation",
          href: "/docs/installation",
        },
        {
          id: "project-structure",
          title: "Project Structure",
          href: "/docs/project-structure",
        },
      ],
    },
    {
      id: "features",
      title: "Features",
      items: [
        {
          id: "student-management",
          title: "Student Management",
          href: "/docs/student-management",
        },
        {
          id: "course-creation",
          title: "Course Creation",
          href: "/docs/course-creation",
        },
        {
          id: "assessments",
          title: "Assessments",
          href: "/docs/assessments",
        },
      ],
    },
    {
      id: "api",
      title: "API Reference",
      items: [
        {
          id: "authentication",
          title: "Authentication",
          href: "/docs/authentication",
        },
        {
          id: "endpoints",
          title: "Endpoints",
          href: "/docs/endpoints",
        },
        {
          id: "webhooks",
          title: "Webhooks",
          href: "/docs/webhooks",
        },
      ],
    },
  ]
  
  export const docContents: DocContent[] = [
    {
      id: "introduction",
      title: "Introduction",
      content: `
  # Introduction to EdTech Platform
  
  Welcome to the EdTech Platform documentation. This platform is designed to help educational institutions manage their courses, students, and assessments efficiently.
  
  ## What is EdTech Platform?
  
  EdTech Platform is a comprehensive solution for educational institutions that want to digitize their teaching and learning processes. It provides tools for:
  
  - Course management
  - Student enrollment and tracking
  - Assessment creation and grading
  - Analytics and reporting
  - Communication between teachers and students
  
  ![EdTech Platform Dashboard](/placeholder.svg?height=400&width=600)
  
  ## Key Features
  
  - **User-friendly interface**: Designed for educators with varying levels of technical expertise
  - **Scalable architecture**: Supports institutions of all sizes
  - **Customizable workflows**: Adapt the platform to your specific educational approach
  - **Comprehensive API**: Integrate with your existing systems
  - **Mobile-friendly**: Access from any device
  
  ![EdTech Platform Features](/placeholder.svg?height=400&width=600)
  
  Get started by following our [Installation Guide](/docs/installation).
      `,
      images: [
        {
          id: "dashboard",
          alt: "EdTech Platform Dashboard",
          src: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "features",
          alt: "EdTech Platform Features",
          src: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "installation",
      title: "Installation",
      content: `
  # Installation
  
  Follow these steps to set up the EdTech Platform in your environment.
  
  ## System Requirements
  
  - Node.js 18.0 or later
  - PostgreSQL 14.0 or later
  - 2GB RAM minimum (4GB recommended)
  - 10GB disk space
  
  ## Installation Steps
  
  1. Clone the repository:
  
  \`\`\`bash
  git clone https://github.com/edtech/platform.git
  cd platform
  \`\`\`
  
  2. Install dependencies:
  
  \`\`\`bash
  npm install
  \`\`\`
  
  3. Set up environment variables:
  
  \`\`\`bash
  cp .env.example .env
  \`\`\`
  
  4. Edit the .env file with your database credentials and other configuration options.
  
  5. Run database migrations:
  
  \`\`\`bash
  npm run migrate
  \`\`\`
  
  6. Start the development server:
  
  \`\`\`bash
  npm run dev
  \`\`\`
  
  7. Visit http://localhost:3000 to access the platform.
  
  ## Docker Installation
  
  We also provide Docker support for easier deployment:
  
  \`\`\`bash
  docker-compose up -d
  \`\`\`
  
  This will start the application and all required services.
  
  ## Troubleshooting
  
  If you encounter any issues during installation, please check our [troubleshooting guide](/docs/troubleshooting) or contact support.
      `,
      images: [],
    },
    {
      id: "project-structure",
      title: "Project Structure",
      content: `
  # Project Structure
  
  Understanding the project structure will help you navigate and customize the EdTech Platform.
  
  ## Directory Structure
  
  \`\`\`
  edtech-platform/
  ├── app/                 # Next.js application code
  │   ├── api/             # API routes
  │   ├── admin/           # Admin panel pages
  │   ├── auth/            # Authentication pages
  │   ├── courses/         # Course management pages
  │   ├── students/        # Student management pages
  │   └── assessments/     # Assessment pages
  ├── components/          # Reusable React components
  ├── lib/                 # Utility functions and shared code
  ├── prisma/              # Database schema and migrations
  ├── public/              # Static assets
  └── styles/              # Global styles
  \`\`\`
  
  ## Key Files
  
  - \`app/layout.tsx\`: Main layout component
  - \`app/page.tsx\`: Homepage component
  - \`prisma/schema.prisma\`: Database schema definition
  - \`middleware.ts\`: Next.js middleware for authentication
  - \`next.config.js\`: Next.js configuration
  
  ## Component Organization
  
  Components are organized by feature and reusability:
  
  - \`components/ui/\`: Low-level UI components (buttons, inputs, etc.)
  - \`components/common/\`: Shared components used across features
  - \`components/[feature]/\`: Feature-specific components
  
  ## Customization Points
  
  The main areas you might want to customize:
  
  1. \`styles/globals.css\`: Global styles and theme variables
  2. \`components/ui/\`: UI components to match your brand
  3. \`app/layout.tsx\`: Main layout structure
  4. \`prisma/schema.prisma\`: Database schema for custom fields
      `,
      images: [],
    },
    {
      id: "student-management",
      title: "Student Management",
      content: `
  # Student Management
  
  The Student Management module allows you to manage student profiles, enrollments, and progress tracking.
  
  ## Student Profiles
  
  Each student has a profile that includes:
  
  - Personal information
  - Contact details
  - Academic history
  - Enrollment status
  - Learning preferences
  
  ### Creating a Student Profile
  
  1. Navigate to Students > Add New
  2. Fill in the required information
  3. Click "Create Profile"
  
  ### Editing a Student Profile
  
  1. Find the student in the student list
  2. Click on their name to view their profile
  3. Click "Edit" to make changes
  4. Save your changes
  
  ## Enrollment Management
  
  You can enroll students in courses individually or in bulk:
  
  ### Individual Enrollment
  
  1. Go to the student's profile
  2. Click "Enroll in Course"
  3. Select the course and enrollment options
  4. Click "Confirm Enrollment"
  
  ### Bulk Enrollment
  
  1. Go to Courses > [Course Name] > Students
  2. Click "Add Students"
  3. Select students from the list or import from CSV
  4. Set enrollment options
  5. Click "Enroll Selected Students"
  
  ## Progress Tracking
  
  Track student progress through:
  
  - Course completion percentage
  - Assessment scores
  - Activity logs
  - Time spent on materials
  
  ### Viewing Progress Reports
  
  1. Go to Reports > Student Progress
  2. Filter by course, date range, or student group
  3. View visualizations or export data
  
  ## Student Groups
  
  Organize students into groups for easier management:
  
  1. Go to Students > Groups
  2. Click "Create Group"
  3. Name the group and add students
  4. Use the group for bulk actions or reporting
      `,
      images: [],
    },
    {
      id: "course-creation",
      title: "Course Creation",
      content: `
  # Course Creation
  
  Learn how to create and manage courses on the EdTech Platform.
  
  ## Course Structure
  
  Courses are organized into:
  
  - **Modules**: Major sections of the course
  - **Lessons**: Individual teaching units
  - **Activities**: Interactive elements within lessons
  - **Assessments**: Quizzes, assignments, and tests
  
  ## Creating a New Course
  
  1. Navigate to Courses > Add New
  2. Fill in the basic course information:
     - Title
     - Description
     - Category
     - Thumbnail image
  3. Click "Create Course"
  
  ## Building Course Content
  
  ### Adding Modules
  
  1. In the course builder, click "Add Module"
  2. Enter the module title and description
  3. Set the module order
  4. Click "Save Module"
  
  ### Adding Lessons
  
  1. Within a module, click "Add Lesson"
  2. Enter the lesson title and objectives
  3. Add content using the rich text editor
  4. Upload or link to media files
  5. Click "Save Lesson"
  
  ### Adding Activities
  
  1. Within a lesson, click "Add Activity"
  2. Select the activity type:
     - Discussion
     - Assignment
     - Interactive exercise
     - External tool
  3. Configure the activity settings
  4. Click "Save Activity"
  
  ## Course Settings
  
  Configure additional course settings:
  
  - **Enrollment options**: Open, invitation-only, or paid
  - **Schedule**: Start date, end date, or self-paced
  - **Visibility**: Public, private, or draft
  - **Completion criteria**: Required elements for completion
  - **Certificates**: Enable/disable completion certificates
  
  ## Publishing a Course
  
  1. Review your course content
  2. Run the course validator to check for issues
  3. Preview the course as a student
  4. When ready, click "Publish Course"
  
  ## Course Management
  
  After publishing, you can:
  
  - Monitor student progress
  - Update course content
  - Manage enrollments
  - View analytics
  - Archive the course when no longer needed
      `,
      images: [],
    },
  ]
  
  