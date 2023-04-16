from xml.etree.ElementInclude import include


str = "Mark IV [redesign]"

if " V " in str:
    str = str.replace(" V ", " 5 ")
elif " IV " in str:
    str = str.replace(" IV ", " 4 ")
elif " III " in str:
    str = str.replace(" III ", " 3 ")
elif " II " in str:
    str = str.replace(" II ", " 2 ")
elif " II " in str:
    str = str.replace(" I ", " 1 ")

print(str)