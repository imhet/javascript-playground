function findMedianSortedArrays(nums1, nums2) {
    function findKth(nums1, nums2, k) {
        const len1 = nums1.length;
        const len2 = nums2.length;

        // 边界情况处理
        if (len1 > len2) {
            return findKth(nums2, nums1, k);
        }
        if (len1 === 0) {
            return nums2[k - 1];
        }
        if (k === 1) {
            return Math.min(nums1[0], nums2[0]);
        }

        // 将 k 分成两部分
        const p1 = Math.min(k >> 1, len1);
        const p2 = k - p1;

        // 比较两个数组的中间值，将较小的一半排除
        if (nums1[p1 - 1] < nums2[p2 - 1]) {
            return findKth(nums1.slice(p1), nums2, k - p1);
        } else {
            return findKth(nums1, nums2.slice(p2), k - p2);
        }
    }

    const totalLen = nums1.length + nums2.length;
    if (totalLen % 2 === 1) {
        return findKth(nums1, nums2, (totalLen >> 1) + 1);
    } else {
        return (findKth(nums1, nums2, totalLen >> 1) + findKth(nums1, nums2, (totalLen >> 1) + 1)) / 2;
    }
}

// 测试用例
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // 输出：2.0

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // 输出：2.5

const nums5 = [0, 0];
const nums6 = [0, 0];
console.log(findMedianSortedArrays(nums5, nums6)); // 输出：0.0

const nums7 = [];
const nums8 = [1];
console.log(findMedianSortedArrays(nums7, nums8)); // 输出：1.0

const nums9 = [2];
const nums10 = [];
console.log(findMedianSortedArrays(nums9, nums10)); // 输出：2.0
