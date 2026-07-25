<img width="1920" height="1080" alt="Screenshot (178)" src="https://github.com/user-attachments/assets/2b76d161-338a-4fa1-998d-56c94dd9ce6c" />
<img width="1920" height="1080" alt="Screenshot (176)" src="https://github.com/user-attachments/assets/1747a933-19d3-41a1-958c-01bc8f9dd350" />
<img width="1920" height="1080" alt="Screenshot (175)" src="https://github.com/user-attachments/assets/ac65e3c6-0519-471b-837f-c2002903c382" />


 Static Web App development setup and deployment to AWS

 Phase 1: Application Setup & Build Configuration
1.Developed the application using React and Vite.
2. Configured asset routing by placing static images inside the /public/images/ directory.
3. Updated component image source paths from relative (./images/...) to root-relative (/images/...) syntax to ensure Vite generates proper paths during production bundling.
4. Executed npm run build in WSL (Windows Subsystem for Linux) to generate optimized production artifacts in the /dist directory.

 Phase 2: AWS S3 Storage Provisioning
1. Created a standard AWS S3 bucket to hold static web assets.
2. Kept Block Public Access settings enabled (100% Private) to prevent direct internet access to the bucket.
3. Uploaded the compiled /dist build files with WSL directly into the S3 bucket root.

 Phase 3: AWS CloudFront & Security (OAC) Setup
1. Created an AWS CloudFront Distribution targeting the S3 bucket REST endpoint as its Origin.
2. Created and attached an Origin Access Control (OAC) policy to lock down the S3 bucket so that only the CloudFront distribution is authorized to fetch objects.
3. Applied the generated AWS policy directly to the S3 Bucket Policy settings.
4. Configured Custom Error Responses inside CloudFront:
   * Redirection rule for 404: Not Found $\rightarrow$ Response Page /index.html (HTTP 200)
   * Redirection rule for 403: Forbidden $\rightarrow$ Response Page /index.html (HTTP 200)
   (This step enables client-side routing for Single Page Applications).

---

 Technical Challenges & Debugging (Lessons Learned I guess)

# Challenge 1: Broken Image Assets Post-Deployment
* Symptom: The main React application rendered correctly on the CloudFront domain, but specific image assets returned broken file icons or 404 Not Found / 403 Forbidden errors.
* Root Cause Analysis: 
  1. Component image tags were using leading dot paths (./images/gal2.png), which caused nested client-side routes to append relative paths incorrectly.
  2. The local development OS was case-insensitive, masking casing mismatches (e.g., .PNG vs .png) that AWS S3 strictly enforced.
* Resolution: Standardized image paths to absolute root paths (/images/gal2.png), verified strict casing consistency against S3 objects, and re-bundled via Vite.

# Challenge 2: Stale Edge Cache & Permission Lockout
* Symptom: After updating bucket policies and replacing S3 assets, CloudFront continued serving cached 403 Access Denied XML pages.
* Root Cause Analysis: CloudFront edge locations automatically cache error responses (403/404) for up to 300 seconds by default.
* Resolution: Discovered and rightly executed a global CloudFront Invalidation (/*) via the AWS Management Console to instantly purge edge location caches globally, followed by a browser hard refresh (Ctrl + Shift + R).

Show less
