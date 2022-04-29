"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[24],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4224:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"Moodle App Scripts: gulp push",sidebar_label:"gulp push",tags:["Moodle App","Tools"]},p=void 0,s={unversionedId:"guides/moodleapp/development/scripts/gulp-push",id:"guides/moodleapp/development/scripts/gulp-push",title:"Moodle App Scripts: gulp push",description:"Overview",source:"@site/docs/guides/moodleapp/development/scripts/gulp-push.md",sourceDirName:"guides/moodleapp/development/scripts",slug:"/guides/moodleapp/development/scripts/gulp-push",permalink:"/devdocs/docs/guides/moodleapp/development/scripts/gulp-push",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/development/scripts/gulp-push.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Tools",permalink:"/devdocs/docs/tags/tools"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1651236034,formattedLastUpdatedAt:"29/04/2022",frontMatter:{title:"Moodle App Scripts: gulp push",sidebar_label:"gulp push",tags:["Moodle App","Tools"]},sidebar:"docs",previous:{title:"Scripts",permalink:"/devdocs/docs/guides/moodleapp/development/scripts/"},next:{title:"Testing",permalink:"/devdocs/docs/guides/moodleapp/development/testing/"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Moodle Tracker data",id:"moodle-tracker-data",level:2},{value:"Config file",id:"config-file",level:2}],c={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gulp push")," command automatically pushes a branch to a git remote and then updates the corresponding Moodle Tracker (Jira) issue with the diff URL or a patch file, similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"mdk push -t"),". This script was developed using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FMCorz/mdk"},"mdk")," as an example. It's meant to be used for ",(0,o.kt)("inlineCode",{parentName:"p"},"MOBILE"),' issues, so it will only update the "master" fields in the tracker.'),(0,o.kt)("p",null,"To run it, just go to the root of the project and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gulp push\n")),(0,o.kt)("p",null,"By default, running ",(0,o.kt)("inlineCode",{parentName:"p"},"gulp push")," without any parameter will push the ",(0,o.kt)("strong",{parentName:"p"},"current branch")," to the ",(0,o.kt)("strong",{parentName:"p"},"origin")," remote. Then it will guess the issue number based on the branch name and it will update the tracker issue to include the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If it's a security issue, it will upload a patch file."),(0,o.kt)("li",{parentName:"ul"},'Otherwise it will update the fields: "Pull from Repository", "Pull Master Branch", and "Pull Master Diff URL".')),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"All the parameters must be passed preceded by ",(0,o.kt)("inlineCode",{parentName:"p"},"--"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gulp push --branch MOBILE-1234 --remote upstream --force\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"branch")," \u2014 To specify the branch you want to push. By default: current branch."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remote")," \u2014 To specify the remote where you want to push your branch. By default: origin."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"force")," \u2014 To force the push of changes to the git remote. By default: false."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"patch")," \u2014 To upload a patch file instead of a diff URL. If the issue you're pushing is a security issue, this setting will be forced to true. By default: false.")),(0,o.kt)("h2",{id:"moodle-tracker-data"},"Moodle Tracker data"),(0,o.kt)("p",null,"The script needs the following data to be able to update the tracker: tracker URL, username, and password."),(0,o.kt)("p",null,"First the script will try to read the URL and password from the ",(0,o.kt)("a",{parentName:"p",href:"#config-file"},"config file"),". If the file doesn't exist or it lacks any of those fields, it will check if ",(0,o.kt)("inlineCode",{parentName:"p"},"mdk")," is installed and configured. If it is, then the script will use the same tracker URL and username as ",(0,o.kt)("inlineCode",{parentName:"p"},"mdk"),"."),(0,o.kt)("p",null,"If none of those conditions are fulfilled, then the script will ask the user to input the URL and username and it will store them in the config file."),(0,o.kt)("p",null,"We use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/atom/node-keytar"},(0,o.kt)("inlineCode",{parentName:"a"},"node-keytar"))," library to manage the password. This library uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Keychain")," on macOS, Secret Service API/",(0,o.kt)("inlineCode",{parentName:"p"},"libsecret")," on Linux, and Credential Vault on Windows. We use the same key as ",(0,o.kt)("inlineCode",{parentName:"p"},"mdk")," to store and retrieve the tracker password, so if you already use ",(0,o.kt)("inlineCode",{parentName:"p"},"mdk")," this script will automatically get the password (it will probably ask your root/admin password in the device to be able to access it)."),(0,o.kt)("h2",{id:"config-file"},"Config file"),(0,o.kt)("p",null,"The script will use a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".moodleapp-dev-config")," to store some configuration data in JSON format. You can also create or edit that file to configure the script's behaviour. These are the fields it accepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upstreamRemote")," \u2014 The upstream where to push the branch if the remote param isn't supplied. By default: origin."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tracker.url")," \u2014 URL of the tracker to update. By default: ",(0,o.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/"},"https://tracker.moodle.org/"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tracker.username")," \u2014 Username to use in the tracker."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tracker.fieldnames.repositoryurl"),' \u2014 Name of the tracker field where to put the repository URL. By default: "Pull  from Repository".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tracker.fieldnames.branch"),' \u2014 Name of the tracker field where to put the branch name. By default: "Pull Master Branch".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tracker.fieldnames.diffurl"),' \u2014 Name of the tracker field where to put the diff URL. By default: "Pull Master Diff URL".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wording.branchRegex")," \u2014 Regex to use to identify the issue number based on the branch name. By default: ",(0,o.kt)("inlineCode",{parentName:"li"},"(MOBILE)[-\\_](\\[0-9]+)"),". If you want to use the script to handle issues that aren't ",(0,o.kt)("inlineCode",{parentName:"li"},"MOBILE")," you'll need to update this field. For example, if you work on 2 projects: ",(0,o.kt)("inlineCode",{parentName:"li"},"(MOBILE|MYPROJECT)[-\\_](\\[0-9]+)"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{PROJECTNAME}.repositoryUrl")," \u2014 To specify the git URL where to push changes for a certain project (",(0,o.kt)("inlineCode",{parentName:"li"},"{PROJECTNAME}")," is the name of the project). This can be used if you work on different projects and you want to push changes to different remotes depending on the project. For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"MOBILE.repositoryUrl: https://github.com/moodlehq/moodleapp"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{PROJECTNAME}.diffUrlTemplate")," \u2014 To specify the diff URL template to use for a certain project (",(0,o.kt)("inlineCode",{parentName:"li"},"{PROJECTNAME}")," is the name of the project). By default: ",(0,o.kt)("inlineCode",{parentName:"li"},"remoteUrl + '/compare/%headcommit%...%branch%'"),".")))}m.isMDXComponent=!0}}]);