# Music Player Application

## Overview

This React-based music player application allows users to play, pause, skip, and search for songs. It is designed to be responsive, with a fluid interface that adapts to various screen sizes. The application integrates with a REST API to load song data and fetch cover images, and it includes features such as background gradient changes based on the cover image and smooth animations.

## Features

- **Responsive Design**: The application adapts to different screen sizes, making it usable on both desktop and mobile devices.
- **Music Control**: Includes Play, Pause, Next, and Previous functionalities.
- **Search Functionality**: Allows users to search for songs.
- **Tab Navigation**: Supports switching between different tabs, such as "For You" and "Top Tracks."
- **Background Gradient**: Dynamically changes the background gradient based on the currently playing song's cover image.
- **Persistent Playback**: Music continues to play even if the user navigates to another browser tab.
- **Interactive Animations**: Includes animations and transitions for loading states, background color changes, and more.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sireesha5055/MusicPlayerUI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MusicPlayerUI
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

This command will open the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will generate a production-ready build in the `build` directory.

## API Integration

The application uses the following REST API to fetch song data:

- **Base URL for Cover Images**: `https://cms.samespace.com/assets/{COVER_IMAGE_ID}`

Replace `{COVER_IMAGE_ID}` with the appropriate ID to retrieve cover images.

## Deployment

The application is deployed on [Vercel](https://musicplayerapp-ashen.vercel.app/). You can access the live demo [here](https://musicplayerapp-ashen.vercel.app/).

## Contributing

Contributions are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- React
- Vercel (for deployment)
- REST API provider
