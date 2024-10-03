#include <iostream>
#include <vector>
#include <algorithm>

#define MAX 9
using namespace std;

int N,M; 
vector<int>graph;

void nPr(int n, int r){
  if(r>n) return;

  vector<int> temp = {graph.begin(), graph.end()};
  do{
    for(int i=0; i<r; i++){
      cout<<temp[i]<<" ";
    }
    cout << "\n";
    reverse(temp.begin() + r, temp.end());
  }while(next_permutation(temp.begin(), temp.end()));
  return;
}

int main() {

  cin>>N>>M;
  //Graph 생성
  for(int i=1; i<=N; i++){
    graph.push_back(i);
  }
  //next permutation
  nPr(N,M);
  return 0;
} 