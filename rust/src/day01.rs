use std::fs;
fn part1(input: &str) -> u32 {
    let result = input
        .split("\n\n")
        .map(|snacks| {
            snacks
                .split("\n")
                .filter_map(|snack| snack.parse::<u32>().ok())
                .sum::<u32>()
        })
        .max()
        .unwrap();
    return result;
}

fn part2(input: &str) -> u32 {
    let mut result = input
        .split("\n\n")
        .map(|snacks| {
            snacks
                .split("\n")
                .filter_map(|snack| snack.parse::<u32>().ok())
                .sum::<u32>()
        })
        .collect::<Vec<u32>>();

    result.sort_by(|a,b| b.cmp(a));

    return result.iter().take(3).sum();
}

pub fn solve_part_1() {
    let input = fs::read_to_string("src/day01.input.txt").unwrap();
    let result = part1(&input);
    println!("{:?}", result);
}

pub fn solve_part_2() {
    let input = fs::read_to_string("src/day01.input.txt").unwrap();
    let result = part2(&input);
    println!("{:?}", result);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn part_1_test_simple() {
        let input: &str = "1\n\n2";
        let result = part1(input);
        let expected: u32 = 2;
        assert_eq!(result, expected);
    }
    #[test]
    fn part_1_test_complex() {
        let input: &str = "1\n\n2\n\n1000\n\n5\n5\n5\n5\n5";
        let result = part1(input);
        let expected: u32 = 1000;
        assert_eq!(result, expected);
    }

    #[test]
    fn part_2_test_simple() {
        let input: &str = "2\n\n2\n\n2\n\n1";
        let result = part2(input);
        let expected: u32 = 6;
        assert_eq!(result, expected);
    }
    #[test]
    fn part_2_test_complex() {
        let input: &str = "2\n\n2\n\n2000\n\n5\n5\n5\n5\n5\n6\n\n2\n\n2";
        let result = part2(input);
        let expected: u32 = 2033;
        assert_eq!(result, expected);
    }
}
