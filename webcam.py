import cv2
cap = cv2.VideoCapture("wa.avi")

while True:

    ret, img = cap.read()

    cv2.imshow('Video', img)
    break

    if(cv2.waitKey(10) & 0xFF == ord('b')):
        break
