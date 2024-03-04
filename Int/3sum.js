var nums = [-1,0,1,2,-1,-4]

for(i=0;i<=nums.length-3;i++){
    for(j=1;j<=nums.length-2;j++){
        for(k=2;k<=nums.length-1;k++){
            if(i!=j && i!=k && j!=k && nums[i]+nums[j]+nums[k] == 0){
                console.log([nums[i],nums[j],nums[k]])
            }
        }
    }
}