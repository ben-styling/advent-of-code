use std::fs;
pub fn part1(input: &str) -> u32 {
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

    print!("{:?}", result);
    return result;
}

pub fn solve_part_1() {
    let input = fs::read_to_string("src/day01.input.txt").unwrap();
    part1(&input);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_simple() {
        let input: &str = "1\n\n2";
        let result = part1(input);
        let expected: u32 = 2;
        assert_eq!(result, expected);
    }
    #[test]
    fn test_complex() {
        let input: &str = "1\n\n2\n\n1000\n\n5\n5\n5\n5\n5";
        let result = part1(input);
        let expected: u32 = 1000;
        assert_eq!(result, expected);
    }
}
