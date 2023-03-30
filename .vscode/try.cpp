#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
void lin_Search(vector<pair<ll,ll>> a,ll n, bool flag,int i, ll t){
     int j = i+1, k = n - 1;
        while(j<k){
        if (a[j].first+a[k].first==t)
        {
            cout << i + 1 << ' ' << a[j].second << ' ' << a[k].second;
            flag = true;
            break;
        }
        else if (a[j].first<t)
            i++;
        else
            j--;
    }
}
int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  ll n,s;
  cin>>n>>s;
  vector<pair<ll,ll>> a;

  for (int i=0;i<n;i++) {
    cin>>a[i].first;
    a[i].second = i + 1;
  }
    sort(a.begin(),a.end());

    bool flag = false;
    for (int i=0;i<n;i++)
    {
        ll t=s-a[i].first;   
        lin_Search(a,n,flag,i,t);
    }
    if (!flag)
    cout << "IMPOSSIBLE";
    return 0;
}