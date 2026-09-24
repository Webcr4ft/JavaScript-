# What Is Divide and Conquer, and How Does Merge Sort Work?

The divide and conquer paradigm in computer science is a technique for recursively breaking down problems into smaller sub-problems. One of the key aspects of this technique is recursion, which happens when a function calls itself repeatedly until a base case is reached. In this lesson, we will take a look at the merge sort algorithm to better understand how the divide and conquer technique works.

Let's say we had this list of numbers:

    42 37 53 17

The goal is to sort that list from smallest to largest using the merge sort algorithm. The first step is to divide that list in half:

    42 37 | 53 17

Then we need to look at the left side of the list:

    42 37

We take that sub list and divide in half again until each sub list has only one item in it:

    42 | 37

A list with only one item in it is sorted by default. Next we need to merge each of those one element sub lists into a sorted list:

    37 42

Then we follow the same process for the right side of the original list:

    // right side of original list
    53 17

    // divide the list in half
    53 | 17

    // merge the lists in sorted order
    17 53

Now that both halves of the original list are sorted, we merge those two halves together and sort the elements:

    17 37 42 53

Here is what the algorithm looks like in code:

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        const sorted = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                sorted.push(left[i]);
                i += 1;
            } else {
                sorted.push(right[j]);
                j += 1;
            }
        }

        return sorted.concat(left.slice(i)).concat(right.slice(j));
    }

The time complexity for merge sort would be `O(n log n)` because the list is continuously divided in half (`log n`) and then merged together (`O(n)`). Unlike other sorting algorithms like bubble sort, merge sort is not an in-place sorting algorithm and has a space complexity of `O(n)`.
