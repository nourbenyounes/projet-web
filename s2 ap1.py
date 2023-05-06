
def saisie ():
    ch=input("donner un message")
    while not (verif(ch)and 1<len (ch)<20):       
            ch=input("donner un message")
    return ch
def verif (ch):
      
      i=-1
      test=True
      while not (test==False or i==len(ch)-1):
            i=i+1
            if "A"<=ch[i].upper()<="Z" :
                  test=True
            else :
                  test=False
    
      return (test)   
def remplire (t,ch):
      for i in range (0,len(ch)-1):
            t[i]=ord(ch[i].upper())-64
def affiche (t,message):
      for i in range (0,len(message)-1):
            print (t[i])   





message=saisie() 
t=[0]*len(message)
remplire (t,message)
affiche (t,message)

