cd public/booking
CMD /c polymer build
cd ../mangocast
CMD /c polymer build
cd ../../
git add --all
git commit -m "Build %DATE% %TIME%"
git push origin master
CMD /c firebase deploy