<p align="center">
  <a href="http://wodoplatform.io/" target="blank"><img src="https://github.com/wodo-platform/wodo-docs/blob/main/images/wodo_logo.png" width="320" alt="Wodo Gaming Lounge" /></a>
</p>

<h2> Wodo Gaming Lounge Service </h2>

<div align="center">
  <h4>
    <a href="#">
      Website
    </a>
    <span> | </span>
    <a href="#">
      Product Docs
    </a>
    <span> | </span>
    <a href="#">
      Architecture Docs
    </a>
    <span> | </span>
    <!-- <a href="#"> -->
    <!--   CLI -->
    <!-- </a> -->
    <!-- <span> | </span> -->
    <a href="#/CONTRIBUTING.md">
      Contributing
    </a>
    <span> | </span>
    <a href="#">
      Reddit
    </a>
    <span> | </span>
    <a href="#">
      Twitter
    </a>
  </h4>
</div>

<h3> Table of Contents </h3> 

- [About](#about)

## build instructions

### add gituhub npm repository

Create .npmrc file and add the following line

@wodo-platform:registry=https://npm.pkg.github.com

You can authenticate to GitHub Packages with npm by either editing your per-user ~/.npmrc file to include your personal access token or by logging in to npm on the command line using your username and personal access token.

To authenticate by adding your personal access token to your ~/.npmrc file, edit the ~/.npmrc file for your project to include the following line, replacing TOKEN with your personal access token. Create a new ~/.npmrc file if one doesn't exist.

//npm.pkg.github.com/:_authToken=TOKEN

To authenticate by logging in to npm, use the npm login command, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

If GitHub Packages is not your default package registry for using npm and you want to use the npm audit command, we recommend you use the --scope flag with the owner of the package when you authenticate to GitHub Packages.

$ npm login --scope=@wodo-platform --registry=https://npm.pkg.github.com

> Username: your_git_user
> Password: your_git_access_token
> Email: noreply@wodo-platform.github.com