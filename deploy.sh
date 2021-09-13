# minifies all source into the github pages repo
# and commits and pushed the changes using the last commit message from the source repo
before=$PWD
# get last commit message
echo "fetching last commit message.."
commit_message=`git log -1 --pretty=%B`
repo="../sanj0.github.io/"
echo "... done."

# minify all sources into gh pages repo
echo "minifying all resources and copying them to ${repo}"
minify -s --recursive -o $repo .
echo "... done."

# add all and commit with aforementioned message
# do git stuff with && in case of failure
echo "commiting and pushing ${repo}"
cd $repo && git add . && git commit -m "automatic deploy commit: ${commit_message}" && git push
echo "... done."

# cd back
cd $before
echo "... done deploying."
