
#include <bits/stdc++.h>
using namespace std;

void Top_K_Selling_Products(vector<int>& sales, vector<int>& top_products,int k,int n) {
    
    priority_queue<pair<int,int>> pq;
    for (int i=0;i<n;i++)
    {
        pq.push({sales[i],i+1});
    }

    while(!pq.empty() and k--){
        auto front=pq.top();
        int product_id=front.second;
        top_products.push_back(product_id);
        pq.pop();
    }
}

int main()
{
    int n,k;
    cin>>n>>k;

    vector<int> sales(n);

    vector<int> top_products;
    for (int i=0;i<n;i++) cin>>sales[i];

    Top_K_Selling_Products(sales,top_products,k,n);

    for (int i=0;i<k;i++)
        cout << top_products[i] << ' ';
    return 0;
}
