# Install Hugo on Windows 10/11

## Step 1: Download the hugo binary

1. Click the link to go to the [official release channel of hugo](https://github.com/gohugoio/hugo/releases).
2. Find the latest release.  
[IMAGE]  
And under the **Assets** section press the Show all XX assets link.
[IMAGE]
3. From the extended asset list first find the ones with windows in their filename.
[IMAGE]  
and click to download the one compatible with your cpu architecture (x64, arm).
   * If you dont know your PC architecture:
     1. Press the Windows Start menu and write system.[IMAGE]
     2. Click on the System Information App and find the System Type from the list on the right. [IMAGE]
     3. If your system type is x64 it means that you need the amd64 hugo binary, if is ARM64 you need the arm64 etc.

## Step 2: Set up hugo on your machine

You can't install hugo with the classic way. Instead:

1. Go to the folder where you downloaded the hugo binary (usually Downloads). Right click on the file and select Extract All... [IMAGE] Change the file extract location to C:\hugo and press the Extract button [IMAGE].
2. Press the Windows Start menu and write edit env and open the Edit enviroment variables for your account. Under the User variables for USERNAME select Path and press Edit.
3. Press New and write C:\hugo and press OK.

## Step 3: Test the installation

1. Press the Windows Start menu and write cmd.
2. Write hugo version and press Enter.
