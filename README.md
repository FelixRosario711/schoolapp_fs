# School ERP Project

A full-stack School ERP solution with:
- **Backend**: Node.js (Express) + SQL Server (MSSQL)
- **Web**: Next.js (React)
- **Mobile**: React Native (Expo)

## Prerequisites
- **Node.js**: Installed on your computer.
- **SQL Server**: Installed and running locally.
- **Expo Go**: App installed on your mobile device.
- **ADB**: Android Debug Bridge installed (usually comes with Android Studio or platform-tools).

---

## 🚀 Quick Start Guide

### 1. Backend Setup (Port 5000)
The backend connects to your SQL Server and provides the API.

1.  Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2.  Install dependencies (first time only):
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm run dev
    ```
    *   **Success**: You should see `Express server running at http://localhost:5000/`
    *   **Verify**: Open [http://localhost:5000](http://localhost:5000) in your browser.

### 2. Web App Setup (Port 3000)
The web dashboard for school administration.

1.  Navigate to the `web` folder:
    ```bash
    cd web
    ```
2.  Install dependencies (first time only):
    ```bash
    npm install
    ```
3.  Start the web app:
    ```bash
    npm run dev
    ```
    *   **Success**: Access the app at [http://localhost:3000](http://localhost:3000)

### 3. Mobile App Setup (USB Method - Recommended)
This is the **most stable** way to run the app on your physical device. It uses USB to bypass Wi-Fi issues.

**Prerequisites:**
*   Connect your phone via USB.
*   Enable **USB Debugging** in Developer Options on your phone.

**Steps:**
1.  **Setup Port Forwarding** (Run these commands in a new terminal window at the project root):
    ```bash
    adb reverse tcp:5000 tcp:5000   # For Backend API
    adb reverse tcp:8081 tcp:8081   # For Metro Bundler
    ```
    *   *Note: You must run these every time you reconnect the USB cable.*

2.  Navigate to the `mobile` folder:
    ```bash
    cd mobile
    ```

3.  Start the app in USB mode:
    ```bash
    npm run usb
    ```

4.  **Scan QR Code**: Open **Expo Go** on your phone and scan the QR code shown in the terminal.

---

## 📡 Alternative: Wi-Fi Connection
If you prefer to use Wi-Fi instead of USB:

1.  **Edit `mobile/App.js`**:
    *   Comment out `OPTION 1` (localhost).
    *   Uncomment `OPTION 2` (Network IP, e.g., `172.20.10.4`).
2.  **Start Expo**:
    ```bash
    npx expo start
    ```
3.  **Scan QR Code**: Ensure your phone and PC are on the **exact same Wi-Fi network**.

---

## 🛠 Troubleshooting

### "Failed to download remote update" (Mobile)
*   **Cause**: Your phone cannot reach the Metro Bundler (Port 8081).
*   **Fix (USB)**: Run `adb reverse tcp:8081 tcp:8081`.
*   **Fix (Wi-Fi)**: Check Windows Firewall and ensure Network Profile is set to **Private**.

### "Network Request Failed" (Mobile)
*   **Cause**: Your phone cannot reach the Backend API (Port 5000).
*   **Fix (USB)**: Run `adb reverse tcp:5000 tcp:5000`.
*   **Fix (Wi-Fi)**: Ensure `App.js` uses your PC's IP address, not `localhost`.

### "Cannot GET /" (Backend)
*   **Fix**: The backend is running but no root route is defined. We added a root route, so you should see a success message now.


Server API should be modular:
"Modular MVC": Tells the AI you want to separate logic (Controllers) from URLs (Routes).
Explicit Folder Names: Naming the folders (controllers, routes, config) forces the AI to organize the files exactly how you want them.
"Clean entry point": Prevents the AI from dumping logic into 
server.js
.