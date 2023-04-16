Time Planner

1.  As with any array traversal, watch out for any array out of bound runtime errors.

2. If your peer is stuck, ask for the brute force solution and then ask how they can optimize that.

3. If still no progress, remind your peer that the arrays are sorted and ask them how they can use this fact to implement a better solution.
4. If your peer can’t improve the brute force solution, ask them whether it’s necessary to check for overlaps between all possible time slot combinations across the two input arrays.
5. If your peer seems to be lost, ask them how they’d go about checking whether the intersection of two given time slots, say slotsA[i] and slotsA[j], yields a time slot whose duration is at least dur.
6. Then ask what the next step would be if
    `the intersection is at least dur.`

    `the intersection is less than dur.`

7. A solution shouldn’t be considered complete if its time complexity is worse than linear, i.e. O(N+M), where N and M are the lengths of slotsA and slotsB, respectively.



**Time Complexity**: we are traversing every input array at most once, hence the time complexity is linear, i.e O(N+M), where N and N are lengths of slotsA and slotsB, respectively.

**Space Complexity**: it’s O(1). We are using four auxiliary variables, all of which are occupying only a constant amount of space.