![Alt text](angular-curso.png)


# Proyecto1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# angular8-curso_udemy


# Install Angular 9 on Linux (Ubuntu/Debian/Mint/CentOS/RHEL/SuSE Linux) 

## Install Node.js and NPM on Ubuntu with PPA
### Add Node.js from NodeSource
This is the simplest method to install a specific version of Node.js. You can quickly follow the below steps to install Node.js 13.x, 12.x, 10.x version. To install Node.js and npm from the NodeSource repository, follow the below steps:

* First, add the Node.js PPA to your system to install Nodejs on Ubuntu.
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
```
If you need to install any other version, change the version number. For example 12.x, 10.x.
* install Node.js on Ubuntu
```
sudo apt-get install -y nodejs
```
* Check Installed Node.js and NPM version
```
node --version
```
###  Install Angular 9 on Linux (Ubuntu/Debian/Mint/CentOS/RHEL/SuSE Linux) 

Install

    if you don’t have a current Angular installation in your environment, use below command to install exactly Angular 9 using npm.

$ npm install --global @angular/cli@9.0.2

    The above command will install angular 9.0.0-rc.14 which is the latest version at the time of writing. But to make sure you have the latest Angular release version in the future, run the below command too.

$ ng update @angular/core@9 @angular/cli@9

    However, if your intention is to install the latest stable version or latest next release version, you can specify those too.

$ npm install --global @angular/cli
$ npm install --global @angular/cli@stable
$ npm install --global @angular/cli@next


## Removing Node.js

You can uninstall Node.js using apt or nvm, depending on the version you want to target. To remove the distro-stable version, you will need to work with the apt utility at the system level.

To remove the distro-stable version, type the following:

    sudo apt remove nodejs

This command will remove the package and retain the configuration files. These may be of use to you if you intend to install the package again at a later point. If you don’t want to save the configuration files for later use, then run the following:

    sudo apt purge nodejs

This will uninstall the package and remove the configuration files associated with it.

As a final step, you can remove any unused packages that were automatically installed with the removed package:

    sudo apt autoremove

To uninstall a version of Node.js that you have enabled using nvm, first determine whether or not the version you would like to remove is the current active version:

    nvm current

If the version you are targeting is not the current active version, you can run:

    nvm uninstall node_version

This command will uninstall the selected version of Node.js.

If the version you would like to remove is the current active version, you must first deactivate nvm to enable your changes:

    nvm deactivate

You can now uninstall the current version using the uninstall command above, which will remove all files associated with the targeted version of Node.js except the cached files that can be used for reinstallment. 
