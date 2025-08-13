# 💈 BarberPro - Modern Barber Portfolio

BarberPro is a sleek, modern, and fully responsive landing page template designed for professional barbers. Built with the high-performance **Astro** framework and styled with **Tailwind CSS**, it offers a visually appealing showcase for services, a gallery, testimonials, and contact information. The project is also containerized with **Docker** and Nginx for easy and consistent deployment.

---

## ✨ Features

- 🚀 **Performance-First**: Built with Astro for a lightning-fast, static-site experience with zero client-side JavaScript by default.
- 🎨 **Modern & Responsive Design**: Styled with Tailwind CSS for a clean, utility-first UI that looks great on all devices.
- 🖼️ **Dynamic Sections**: Includes an interactive "Before & After" slider, a style gallery, client reviews, and an embedded video section.
- 🐳 **Dockerized**: Comes with a `Dockerfile` and Nginx configuration for easy, one-command deployment.
- **SEO Optimized**: Automatically generates a `sitemap.xml` and `robots.txt` for better search engine visibility.
- 📞 **Contact Ready**: A clear call-to-action and contact section to connect with potential clients or employers.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Docker](https://www.docker.com/) & [Nginx](https://www.nginx.com/)
- **Video Embedding**: [@justinribeiro/lite-youtube](https://github.com/justinribeiro/lite-youtube)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/) (via Astro Assets)
- **Code Formatting**: [Prettier](https://prettier.io/)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 22 or higher, as specified in `Dockerfile`)
- [pnpm](https://pnpm.io/) (or your preferred package manager like npm or yarn)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/carfdev/barber.git
    cd barber
    ```

2.  **Install dependencies**:

    ```bash
    pnpm install
    ```

3.  **Set up environment variables**:
    Copy the environment variable template and fill in your details. This is used to generate the sitemap correctly.

    ```bash
    cp .env.template .env
    ```

    Now, edit the `.env` file:

    ```env
    # For development, localhost is fine. For production, use your domain.
    URL=http://localhost:4321
    ```

4.  **Run the development server**:
    ```bash
    pnpm dev
    ```
    The site will be available at `http://localhost:4321`.

---

## 🐳 Docker Deployment

This project is configured for easy deployment with Docker.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/) installed and running on your machine.

### Steps

1.  **Build the Docker image**:
    You must pass your production URL as a build argument. This ensures the sitemap is generated with the correct domain.

    ```bash
    docker build --build-arg URL=https://your-domain.com -t barber-pro-app .
    ```

2.  **Run the Docker container**:
    This command starts the Nginx server in the container and maps port 8080 on your host to port 8080 in the container.
    ```bash
    docker run -d -p 8080:8080 --name barber-pro-container barber-pro-app
    ```
    The application will be accessible at `http://localhost:8080`.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## ✍️ Author

Created by [Carfdev](https://github.com/carfdev/).
