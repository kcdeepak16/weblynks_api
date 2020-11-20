n = int(input())
s = list(map(int,input().split(" ")))
a,b,c = 0,0,0
for i in range(n):
	l=i-1
	r=i
	while(l>=1 and r<=n):
		v = s[l]*s[r]
		c += v
		if b<c:
			b = c
		if a>(c-b):
			a=c-b
		l -= 1
		r += 1
print(a)