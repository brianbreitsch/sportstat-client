# sportstat
Sports statistics application.


# project structure/initial setup

I used the advice here:
https://divshot.com/blog/web-components/polymer-app-structure-tips/

when setting up the project.


# bower

This client-side application is using bower to manage dependencies.
At the beginning of development, I use:

    bower install Polymer/paper-elements
    bower install PolymerLabs/polymer-ui-elements

to initially install all elements. As we begin using specific elements,
running (e.g.)

    bower install --save Polymer/paper-ui-button

will save the compoenent to the bower.json file for easy dependency management
by others.

# element names

All custion element names begin with the prefix `ss`.
