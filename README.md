# Balazs Hetenyi - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and a functional contact form powered by EmailJS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection
- **Interactive Sections**:
  - Hero section with animated introduction
  - About section with personal information
  - Skills showcase with technology icons
  - Work experience timeline
  - Education background
  - Project portfolio with live demos
  - Contact form with EmailJS integration
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **TypeScript**: Fully typed for better development experience
- **Modern Stack**: Latest React 19, Next.js 15, and Tailwind CSS 4

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Font**: Next.js Font Optimization with Geist

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-next
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📧 EmailJS Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{message}}` - message content
   - `{{to_name}}` - recipient name
4. Get your Service ID, Template ID, and Public Key
5. Update the `.env.local` file with your credentials

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
└── components/
    ├── about-section.tsx     # About me section
    ├── contact-section.tsx   # Contact form with EmailJS
    ├── education-section.tsx # Education background
    ├── experience-section.tsx# Work experience
    ├── footer.tsx           # Footer component
    ├── header.tsx           # Navigation header
    ├── hero-section.tsx     # Landing hero section
    ├── projects-section.tsx # Portfolio projects
    ├── skills-section.tsx   # Technical skills
    ├── theme-provider.tsx   # Theme context provider
    └── theme-toggle.tsx     # Dark/light mode toggle
```

## 🎨 Customization

### Updating Content

- **Personal Information**: Edit the content in respective section components
- **Skills**: Update the skills array in `skills-section.tsx`
- **Projects**: Modify the projects data in `projects-section.tsx`
- **Experience**: Update work history in `experience-section.tsx`
- **Education**: Modify education details in `education-section.tsx`

### Styling

- **Colors**: Customize the color scheme in `tailwind.config.js`
- **Fonts**: Update font settings in `layout.tsx`
- **Animations**: Modify Framer Motion configurations in component files

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Connect your GitHub repository to Vercel
2. Add your environment variables in the Vercel dashboard
3. Deploy automatically with every push to main branch

### Other Deployment Options

- **Netlify**: Compatible with static export
- **AWS Amplify**: Full-stack deployment
- **Railway**: Container-based deployment
- **Self-hosted**: Using Docker or traditional hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [https://www.linkedin.com/in/balazs-hetenyi-b45251173/](https://www.linkedin.com/in/balazs-hetenyi-b45251173/)
- **GitHub**: [https://github.com/balazshetenyi](https://github.com/balazshetenyi)

---

Built with ❤️ by Balazs Hetenyi
