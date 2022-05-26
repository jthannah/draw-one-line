import { KonvaEventObject } from 'konva/lib/Node'
import React from 'react'
import { Layer, Line, Stage, Text } from 'react-konva'

const initialDrawing = [{ tool: 'pen', points: [158, 109, 155, 109, 154, 109, 144, 111, 136, 114, 122, 123, 116, 128, 110, 134, 107, 140, 105, 148, 105, 160, 108, 170, 113, 177, 122, 186, 125, 188, 129, 190, 132, 190, 135, 192, 136, 192, 139, 192, 141, 192, 149, 190, 156, 187, 160, 186, 166, 185, 170, 184, 170, 183, 172, 183, 173, 182] }, { tool: 'pen', points: [204, 144, 205, 144, 209, 144, 229, 144, 250, 145, 277, 149, 292, 151, 312, 156, 322, 159, 326, 164, 327, 170, 326, 178, 312, 198, 306, 204, 296, 216, 286, 226, 277, 235, 258, 250, 256, 253, 246, 259, 242, 263, 236, 269, 232, 274, 229, 277, 224, 280, 219, 282, 209, 287, 197, 291, 186, 292, 166, 296, 158, 297, 142, 297, 133, 299, 126, 299] }, { tool: 'pen', points: [353, 242, 351, 243, 350, 243, 349, 245, 348, 248, 346, 257, 341, 293, 340, 312, 341, 328, 347, 344, 353, 357, 362, 371, 373, 380, 384, 388, 405, 396, 414, 400, 435, 404, 458, 408, 487, 412, 530, 414, 549, 416, 552, 416, 555, 416, 551, 414, 545, 409, 540, 406, 520, 392, 494, 372, 447, 320, 437, 307, 425, 296, 421, 293, 414, 288, 408, 287, 400, 287, 392, 291, 380, 305, 374, 313, 365, 332, 361, 343, 358, 355, 357, 368, 357, 372, 357, 373, 357, 378, 356, 380, 354, 381, 351, 381, 346, 381, 335, 380, 314, 369, 301, 359, 289, 346, 277, 330, 268, 311, 265, 302, 264, 281, 264, 269, 271, 251] }, { tool: 'pen', points: [45, 36, 46, 36, 48, 36, 50, 37, 55, 40, 62, 44, 70, 49, 79, 55, 85, 59, 88, 62, 89, 62] }, { tool: 'pen', points: [188, 32, 188, 33, 188, 34, 188, 37, 191, 45, 195, 52, 204, 67, 209, 74, 220, 93, 232, 113, 243, 131, 252, 147, 260, 157, 266, 164, 274, 173, 279, 179, 283, 182, 291, 191, 302, 199, 308, 204, 326, 216, 359, 241, 381, 257, 404, 273, 420, 285, 443, 303, 460, 313, 492, 336, 513, 347, 543, 362, 604, 389, 615, 392, 665, 410, 685, 417, 760, 431, 794, 434, 820, 435, 853, 437, 888, 438, 913, 443, 936, 448, 957, 454, 975, 462, 1002, 485, 1009, 492, 1017, 511, 1024, 533, 1025, 564, 1024, 582, 1018, 597, 1010, 612, 1006, 617, 986, 635, 967, 644, 949, 651, 920, 656, 869, 659, 855, 659, 805, 656, 759, 651, 654, 623, 577, 595, 505, 557] }, { tool: 'pen', points: [317, 411, 294, 379, 286, 356, 284, 338, 291, 319, 307, 296, 334, 271, 381, 239, 424, 220, 492, 202, 601, 196, 632, 199, 670, 212, 765, 252, 813, 279, 840, 296, 858, 311, 871, 327, 877, 334, 878, 340, 879, 343, 879, 344, 879, 345] }, { tool: 'pen', points: [689, 292, 686, 294, 674, 299, 656, 305, 631, 314, 612, 320, 597, 326, 575, 338, 557, 349, 544, 359, 531, 370, 523, 380, 517, 400, 517, 412, 522, 426, 535, 441, 551, 454, 572, 466, 596, 476, 630, 484, 679, 490, 708, 491, 719, 491, 748, 492, 761, 493, 791, 495, 813, 495, 845, 491, 897, 474, 929, 456, 1022, 387, 1081, 327, 1130, 273, 1151, 241, 1162, 216, 1162, 215, 1158, 212, 1147, 210, 1124, 214, 1114, 224, 1110, 239, 1111, 269, 1116, 278, 1164, 355, 1200, 398, 1246, 447, 1264, 471, 1268, 479, 1272, 500, 1270, 513, 1253, 531, 1199, 552, 1155, 559, 1064, 567, 1021, 567, 898, 555, 847, 549, 803, 541, 767, 535, 739, 530, 718, 527, 719, 527, 724, 527, 738, 525, 756, 521, 764, 519, 779, 516, 796, 515, 801, 515, 805, 515, 809, 518, 812, 519, 817, 520, 819, 522, 821, 523, 825, 525, 826, 526, 826, 527, 825, 528, 820, 530, 817, 530, 797, 533, 770, 535, 749, 536, 719, 537, 704, 537, 683, 539, 652, 541, 632, 544, 620, 546, 610, 548, 600, 550, 590, 552, 584, 553, 576, 553, 570, 554, 558, 557, 547, 557, 539, 557, 525, 553, 514, 547, 502, 540, 472, 519, 464, 512, 458, 505, 453, 501, 446, 495, 444, 493, 440, 489, 435, 487, 432, 485, 431, 484, 430, 484, 429, 483, 428, 482, 427, 481, 426, 480, 423, 477, 421, 475, 417, 471, 413, 467, 405, 458, 392, 448, 381, 439, 375, 436, 369, 432, 361, 426, 358, 425, 355, 423, 352, 421, 347, 418, 345, 417, 342, 415, 338, 414, 330, 412, 328, 412, 327, 412, 326, 412, 324, 411, 321, 411, 320, 411, 319, 411, 316, 411, 315, 411, 314, 411, 307, 411, 303, 411, 297, 412, 295, 412, 289, 413, 272, 419, 266, 426, 260, 436, 258, 447, 258, 458, 277, 492, 300, 513, 348, 543, 502, 605, 556, 619, 714, 652, 855, 658, 1083, 632, 1217, 581, 1330, 512, 1388, 453, 1408, 421, 1408, 373, 1391, 346, 1328, 299, 1242, 265, 1081, 244, 1029, 244, 905, 257, 695, 310, 497, 407, 443, 509, 475, 524, 543, 543, 623, 550, 719, 547, 786, 540, 817, 536, 806, 534, 739, 536, 634, 560, 580, 574, 479, 609, 377, 661, 347, 695, 346, 697, 346, 693, 346, 684, 333, 666, 293, 626, 256, 596, 207, 564, 161, 532, 161, 527, 172, 517, 208, 496, 308, 452, 417, 412, 543, 366, 646, 336, 705, 322, 726, 318, 741, 318, 742, 319, 748, 330, 762, 367, 777, 401, 783, 416, 792, 430, 803, 437, 815, 443, 840, 444, 868, 436, 886, 423, 915, 373, 915, 358, 899, 329, 693, 267, 538, 271, 389, 296, 306, 330, 297, 338, 515, 411, 766, 418, 991, 406, 1106, 382, 1067, 370, 935, 353, 689, 349, 655, 356, 705, 360, 757, 360, 808, 362, 808, 363, 740, 364, 623, 366, 625, 366, 717, 348, 852, 325, 952, 311, 965, 307, 918, 309, 798, 329, 629, 385, 583, 439, 593, 469, 722, 533, 782, 522, 863, 468, 922, 396, 938, 321, 910, 262, 731, 186, 533, 177, 427, 185, 237, 228, 160, 275, 233, 324, 494, 343, 654, 323, 724, 304, 734, 299, 731, 294, 712, 291, 612, 313, 582, 345, 586, 376, 642, 433, 687, 462, 714, 473, 716, 474, 702, 464, 690, 454, 688, 447, 698, 436, 752, 415, 851, 390, 885, 385, 908, 379, 910, 378, 878, 373, 786, 373, 679, 379, 615, 390, 549, 415, 548, 432, 679, 497, 851, 519, 904, 524, 910, 525, 908, 525, 875, 526, 741, 530, 686, 531, 669, 532, 667, 533, 681, 533, 733, 523, 797, 489, 874, 419, 920, 324] }, { tool: 'pen', points: [814, 156, 779, 147, 695, 143, 657, 153, 638, 166, 627, 190, 648, 225, 735, 258, 832, 253, 867, 240, 883, 232, 883, 231, 867, 276, 871, 326, 892, 363, 927, 400, 959, 418, 1028, 415, 1078, 387, 1126, 326, 1154, 221, 1149, 199] }, { tool: 'pen', points: [896, 130, 899, 131, 914, 137, 944, 140, 958, 141, 993, 144, 1025, 150, 1036, 155, 1036, 180, 1023, 205, 993, 241, 972, 263, 937, 288, 895, 308, 878, 312, 870, 313] }, { tool: 'pen', points: [697, 229, 664, 229, 638, 234, 568, 244, 523, 260, 503, 272, 485, 291, 472, 307, 460, 333, 460, 344, 469, 358, 530, 386, 602, 402, 685, 407, 780, 407, 821, 406] }, { tool: 'pen', points: [1145, 236, 1146, 236, 1148, 235, 1152, 231, 1167, 218, 1177, 210, 1192, 200, 1211, 188, 1235, 174, 1273, 160, 1292, 159, 1313, 160, 1336, 171, 1348, 184, 1353, 193] }, { tool: 'pen', points: [810, 653, 832, 659, 850, 665, 908, 673, 937, 678, 1002, 683, 1052, 683, 1062, 682, 1066, 679, 1063, 679, 1054, 688, 1042, 697, 1011, 724, 993, 738, 984, 745, 965, 758, 948, 766, 931, 768, 919, 768, 908, 766, 887, 759, 845, 745, 822, 738, 780, 727, 744, 723, 724, 720, 696, 717, 683, 715, 670, 713, 667, 712, 666, 712, 665, 712, 663, 713, 658, 718, 653, 727, 647, 735, 641, 752, 639, 759, 635, 769, 634, 777, 634, 784, 635, 788, 637, 790, 637, 791, 640, 793, 642, 794, 646, 795, 650, 797, 655, 799, 666, 804, 670, 806, 698, 816, 721, 826, 736, 831, 744, 834, 759, 840, 768, 842, 774, 844, 781, 844, 782, 845, 784, 845, 785, 845, 784, 845, 782, 845, 780, 845, 776, 844, 770, 844, 752, 844, 742, 844, 732, 845, 717, 849, 695, 852, 684, 853, 668, 854, 659, 854, 646, 854, 634, 854, 626, 854, 625, 854, 624, 854] }, { tool: 'pen', points: [562, 864, 562, 865, 563, 867, 564, 868, 566, 871, 570, 874, 576, 881, 582, 887, 589, 895, 605, 906, 623, 922, 635, 929, 776, 922, 783, 908, 790, 899, 803, 874, 811, 855, 819, 837, 832, 796, 838, 771, 840, 750, 840, 734, 839, 719, 826, 673, 818, 656, 814, 649, 798, 632, 781, 619, 773, 615, 764, 612, 752, 612, 739, 612, 726, 612, 690, 617, 676, 619, 658, 624, 649, 627, 633, 633, 606, 648, 598, 653, 582, 669, 573, 682, 570, 694, 569, 704, 572, 724, 589, 752, 597, 762, 606, 771, 616, 784, 621, 790, 631, 803, 634, 806, 639, 815, 643, 820, 650, 831, 664, 857, 672, 867, 675, 873, 686, 885, 696, 893, 705, 896, 714, 898, 717, 899, 738, 903, 751, 906, 788, 920, 804, 928, 1037, 928, 1043, 914, 1048, 903, 1056, 881, 1066, 844, 1070, 822, 1073, 806, 1074, 801, 1075, 790, 1076, 772, 1076, 758, 1076, 750, 1076, 742, 1076, 733, 1076, 727, 1076, 717, 1074, 703, 1070, 694, 1069, 692, 1067, 684, 1065, 679, 1060, 669, 1055, 661, 1050, 654, 1047, 653, 1042, 649, 1038, 647, 1031, 645, 1005, 641, 991, 639, 971, 638, 946, 635, 910, 629, 878, 626, 857, 622, 793, 614, 750, 609, 714, 604, 684, 600, 624, 591, 601, 588, 573, 583, 550, 579, 531, 576, 484, 566, 474, 563, 471, 562, 467, 560] }, { tool: 'eraser', points: [345, 628, 347, 628, 353, 631, 366, 637, 378, 643, 394, 651, 415, 661, 420, 665, 427, 669, 433, 671, 437, 673, 439, 673, 440, 673, 442, 673, 447, 671, 451, 669, 454, 666, 458, 663, 460, 659, 461, 656, 462, 652, 463, 649, 463, 647, 463, 645, 462, 645, 461, 644, 457, 643, 450, 641, 448, 641, 446, 640, 442, 640] }, { tool: 'eraser', points: [392, 637, 394, 637, 397, 638, 402, 640, 405, 640, 416, 640, 424, 639, 428, 637, 434, 636, 440, 634, 442, 634, 441, 634, 439, 634, 434, 636, 428, 639, 418, 644, 405, 649, 403, 650, 398, 652, 397, 652, 398, 652, 399, 650, 402, 649, 403, 648, 405, 648, 405, 647, 405, 648, 403, 652, 396, 659, 394, 662, 391, 664, 390, 665, 391, 665, 392, 664, 393, 662, 393, 661, 393, 660, 393, 658, 393, 657, 392, 658, 386, 661, 375, 670, 367, 674, 358, 679, 354, 680, 351, 682, 351, 683, 351, 685, 351, 686, 350, 687, 349, 689, 348, 690, 346, 693, 345, 695, 344, 696, 342, 698, 341, 699, 341, 698, 342, 697, 344, 695, 344, 694, 345, 694, 345, 693, 346, 693, 348, 693, 348, 694, 350, 697, 351, 701, 351, 704, 351, 705, 351, 704, 351, 702, 351, 695, 351, 685, 351, 684, 351, 681, 351, 680, 351, 681, 351, 685, 351, 687, 351, 694, 349, 698, 347, 702, 346, 704, 346, 705, 347, 703, 348, 701, 350, 700, 351, 697, 352, 696, 352, 694, 352, 693, 352, 691, 352, 690, 352, 688, 352, 687, 351, 686, 351, 684, 351, 683, 352, 682, 353, 682, 354, 682, 355, 682, 357, 682, 359, 683, 360, 685, 361, 687, 362, 689, 362, 690, 362, 692, 362, 693, 361, 693, 361, 694, 359, 694, 352, 694, 347, 694, 346, 694, 344, 694, 343, 694, 343, 693, 343, 688, 343, 685, 343, 680, 343, 678, 343, 674, 343, 672, 343, 671, 343, 670, 342, 668, 341, 667, 340, 666, 339, 665, 338, 664, 337, 664, 336, 663, 334, 663, 332, 663, 331, 663, 330, 663, 329, 663, 328, 663, 327, 663, 326, 662, 326, 661, 326, 660, 326, 659, 325, 659, 325, 658, 324, 658, 324, 657, 323, 657, 323, 656, 323, 657, 326, 661, 331, 669, 337, 679, 341, 686, 343, 689, 344, 693, 344, 697] }, { tool: 'pen', points: [261, 700, 264, 698, 265, 698, 267, 697, 272, 695, 282, 690, 289, 688, 300, 685, 314, 681, 320, 678, 337, 673, 345, 671, 354, 667, 362, 664, 362, 663, 363, 663, 363, 661, 363, 659, 363, 658, 362, 656, 361, 655, 359, 654, 354, 654, 349, 654, 339, 654, 328, 656, 320, 658, 317, 658, 315, 659, 314, 659, 319, 665, 328, 671, 331, 673, 341, 677, 347, 678, 354, 678, 360, 677, 373, 671, 383, 664, 385, 659, 386, 658, 380, 656, 376, 656, 372, 656, 363, 660, 352, 666, 346, 668, 344, 669, 345, 666, 347, 664, 355, 654] }, { tool: 'pen', points: [959, 242, 959, 241] }, { tool: 'pen', points: [206, 390, 206, 389, 210, 380, 216, 371, 220, 362, 230, 347, 249, 320, 261, 304, 274, 284, 282, 273, 289, 262, 303, 244, 308, 236, 317, 225, 325, 215, 331, 207, 342, 195, 345, 191, 352, 186, 361, 178, 369, 174, 374, 170, 379, 168, 382, 167, 391, 165, 400, 161, 409, 158, 419, 157, 433, 151, 451, 148, 458, 147, 471, 144, 486, 141, 499, 138, 514, 134, 522, 133, 525, 133, 531, 132, 537, 132, 542, 132, 546, 132, 550, 132, 556, 132, 559, 132, 563, 132, 564, 132, 568, 132, 570, 132, 571, 132, 572, 132] }, { tool: 'pen', points: [888, 172, 874, 172, 860, 172, 816, 183, 788, 192, 758, 207, 742, 221, 734, 229, 724, 248, 721, 269, 721, 302, 729, 322, 742, 342, 754, 352, 758, 355, 794, 366, 814, 366, 857, 361, 883, 353, 919, 333, 934, 322, 949, 309, 957, 299, 966, 288, 966, 284, 966, 283] }]

const FreeDraw = () => {
  const [tool, setTool] = React.useState('pen')
  const [lines, setLines] = React.useState(initialDrawing)
  const isDrawing = React.useRef(false)
  const lockDrawing = React.useRef(false)

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true;
    const pos = e.target.getStage()?.getPointerPosition();
    // Only set the new lines if the positions are valid values
    if (pos) {
      setLines([...lines, { tool, points: [pos.x, pos.y] }]);
    }
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    // no drawing - skipping
    if (!isDrawing.current || lockDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage?.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point, only if it's not null
    if (point) {
      lastLine.points = lastLine.points.concat([point.x, point.y]);
    }

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false
    lockDrawing.current = true
  };

  return (
    <div style={{cursor: lockDrawing.current ? "not-allowed" : "default"}}>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text text="Draw One Line" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
      {/* <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select> */}
    </div>
  );
};

export default FreeDraw