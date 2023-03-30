#include <bits/stdc++.h>
using namespace std;

// Function will update rank secured by each participant
void RankWeightLifters(vector<int>& weight, vector<string>& rank,int n) {
    
    // create priority queue to store weigth and position of participant
    priority_queue<pair<int,int>> pq;
    for (int i=0;i<n;i++)
    {
        pq.push({weight[i],i});
    }

    // initilize position to 1 
    int pos=1;
    // While priority queue is not empty 
    while(!pq.empty()){
       // Extract the front element from the queue
        auto front=pq.top();
        // store the index of participant in the weight vector
        int ind=front.second;
        if (pos==1)
        rank[ind]="Gold Medal";
        else if (pos==2)
        rank[ind]="Silver Medal";
        else if (pos==3)
        rank[ind]="Bronze Medal";
        else 
        rank[ind]=to_string(pos);
        pos++;
        pq.pop();
    }
}

int main()
{
    // Enter number of participants
    int n;
    cin>>n;
    // Create vector rank to store rank
    vector<string> rank(n);

    // Create vector weight to store weight lifted by each participant 
    vector<int> weight(n);
    for (int i=0;i<n;i++) cin>>weight[i];

    // Function will update rank of each participant to the vector rank 
    RankWeightLifters(weight,rank,n);

    // Output the rank of each participant
    for (int i=0;i<n;i++)
        cout << rank[i] << " ";
    
    return 0;
}