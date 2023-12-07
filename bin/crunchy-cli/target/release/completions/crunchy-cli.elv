
use builtin;
use str;

set edit:completion:arg-completer[crunchy-cli] = {|@words|
    fn spaces {|n|
        builtin:repeat $n ' ' | str:join ''
    }
    fn cand {|text desc|
        edit:complex-candidate $text &display=$text' '(spaces (- 14 (wcswidth $text)))$desc
    }
    var command = 'crunchy-cli'
    for word $words[1..-1] {
        if (str:has-prefix $word '-') {
            break
        }
        set command = $command';'$word
    }
    var completions = [
        &'crunchy-cli'= {
            cand --lang 'Overwrite the language in which results are returned. Default is your system language'
            cand --credentials 'Login with credentials (username or email and password). Must be provided as user:password'
            cand --etp-rt 'Login with the etp-rt cookie'
            cand --proxy 'Use a proxy to route all traffic through'
            cand --user-agent 'Use custom user agent'
            cand -v 'Verbose output'
            cand --verbose 'Verbose output'
            cand -q 'Quiet output. Does not print anything unless it''s a error'
            cand --quiet 'Quiet output. Does not print anything unless it''s a error'
            cand --experimental-fixes 'Enable experimental fixes which may resolve some unexpected errors'
            cand --anonymous 'Login anonymously / without an account'
            cand -h 'Print help (see more with ''--help'')'
            cand --help 'Print help (see more with ''--help'')'
            cand -V 'Print version'
            cand --version 'Print version'
            cand archive 'Archive a video'
            cand download 'Download a video'
            cand login 'Save your login credentials persistent on disk'
            cand search 'Search in videos'
            cand help 'Print this message or the help of the given subcommand(s)'
        }
        &'crunchy-cli;archive'= {
            cand -a 'Audio languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand --audio 'Audio languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand -s 'Subtitle languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand --subtitle 'Subtitle languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand -o 'Name of the output file'
            cand --output 'Name of the output file'
            cand --output-specials 'Name of the output file if the episode is a special'
            cand -r 'Video resolution'
            cand --resolution 'Video resolution'
            cand -m 'Sets the behavior of the stream merging. Valid behaviors are ''auto'', ''audio'' and ''video'''
            cand --merge 'Sets the behavior of the stream merging. Valid behaviors are ''auto'', ''audio'' and ''video'''
            cand --ffmpeg-preset 'Presets for converting the video to a specific coding format. Available presets: 
  h264 (h264 encoded with default video quality/compression)
  h264-nvidia (h264 encoded with nvidia hardware acceleration)
  h264-apple (h264 encoded with apple hardware acceleration)
  h264-lossless (h264 encoded with lossless video quality/compression)
  h264-normal (h264 encoded with normal video quality/compression)
  h264-low (h264 encoded with low video quality/compression)
  h264-nvidia-lossless (h264 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h264-nvidia-normal (h264 encoded with nvidia hardware acceleration and normal video quality/compression)
  h264-nvidia-low (h264 encoded with nvidia hardware acceleration and low video quality/compression)
  h264-apple-lossless (h264 encoded with apple hardware acceleration and lossless video quality/compression)
  h264-apple-normal (h264 encoded with apple hardware acceleration and normal video quality/compression)
  h264-apple-low (h264 encoded with apple hardware acceleration and low video quality/compression)
  h265 (h265 encoded with default video quality/compression)
  h265-nvidia (h265 encoded with nvidia hardware acceleration)
  h265-apple (h265 encoded with apple hardware acceleration)
  h265-lossless (h265 encoded with lossless video quality/compression)
  h265-normal (h265 encoded with normal video quality/compression)
  h265-low (h265 encoded with low video quality/compression)
  h265-nvidia-lossless (h265 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h265-nvidia-normal (h265 encoded with nvidia hardware acceleration and normal video quality/compression)
  h265-nvidia-low (h265 encoded with nvidia hardware acceleration and low video quality/compression)
  h265-apple-lossless (h265 encoded with apple hardware acceleration and lossless video quality/compression)
  h265-apple-normal (h265 encoded with apple hardware acceleration and normal video quality/compression)
  h265-apple-low (h265 encoded with apple hardware acceleration and low video quality/compression)
  av1 (av1 encoded with default video quality/compression)
  av1-lossless (av1 encoded with lossless video quality/compression)
  av1-normal (av1 encoded with normal video quality/compression)
  av1-low (av1 encoded with low video quality/compression)'
            cand --default-subtitle 'Set which subtitle language should be set as default / auto shown when starting a video'
            cand -t 'The number of threads used to download'
            cand --threads 'The number of threads used to download'
            cand --skip-existing 'Skip files which are already existing'
            cand --skip-specials 'Skip special episodes'
            cand -y 'Skip any interactive input'
            cand --yes 'Skip any interactive input'
            cand -h 'Print help (see more with ''--help'')'
            cand --help 'Print help (see more with ''--help'')'
        }
        &'crunchy-cli;download'= {
            cand -a 'Audio language. Can only be used if the provided url(s) point to a series. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand --audio 'Audio language. Can only be used if the provided url(s) point to a series. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand -s 'Subtitle language. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand --subtitle 'Subtitle language. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand -o 'Name of the output file'
            cand --output 'Name of the output file'
            cand --output-specials 'Name of the output file if the episode is a special'
            cand -r 'Video resolution'
            cand --resolution 'Video resolution'
            cand --ffmpeg-preset 'Presets for converting the video to a specific coding format. Available presets: 
  h264 (h264 encoded with default video quality/compression)
  h264-nvidia (h264 encoded with nvidia hardware acceleration)
  h264-apple (h264 encoded with apple hardware acceleration)
  h264-lossless (h264 encoded with lossless video quality/compression)
  h264-normal (h264 encoded with normal video quality/compression)
  h264-low (h264 encoded with low video quality/compression)
  h264-nvidia-lossless (h264 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h264-nvidia-normal (h264 encoded with nvidia hardware acceleration and normal video quality/compression)
  h264-nvidia-low (h264 encoded with nvidia hardware acceleration and low video quality/compression)
  h264-apple-lossless (h264 encoded with apple hardware acceleration and lossless video quality/compression)
  h264-apple-normal (h264 encoded with apple hardware acceleration and normal video quality/compression)
  h264-apple-low (h264 encoded with apple hardware acceleration and low video quality/compression)
  h265 (h265 encoded with default video quality/compression)
  h265-nvidia (h265 encoded with nvidia hardware acceleration)
  h265-apple (h265 encoded with apple hardware acceleration)
  h265-lossless (h265 encoded with lossless video quality/compression)
  h265-normal (h265 encoded with normal video quality/compression)
  h265-low (h265 encoded with low video quality/compression)
  h265-nvidia-lossless (h265 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h265-nvidia-normal (h265 encoded with nvidia hardware acceleration and normal video quality/compression)
  h265-nvidia-low (h265 encoded with nvidia hardware acceleration and low video quality/compression)
  h265-apple-lossless (h265 encoded with apple hardware acceleration and lossless video quality/compression)
  h265-apple-normal (h265 encoded with apple hardware acceleration and normal video quality/compression)
  h265-apple-low (h265 encoded with apple hardware acceleration and low video quality/compression)
  av1 (av1 encoded with default video quality/compression)
  av1-lossless (av1 encoded with lossless video quality/compression)
  av1-normal (av1 encoded with normal video quality/compression)
  av1-low (av1 encoded with low video quality/compression)'
            cand -t 'The number of threads used to download'
            cand --threads 'The number of threads used to download'
            cand --skip-existing 'Skip files which are already existing'
            cand --skip-specials 'Skip special episodes'
            cand -y 'Skip any interactive input'
            cand --yes 'Skip any interactive input'
            cand --force-hardsub 'Force subtitles to be always burnt-in'
            cand -h 'Print help (see more with ''--help'')'
            cand --help 'Print help (see more with ''--help'')'
        }
        &'crunchy-cli;login'= {
            cand --credentials 'Login with credentials (username or email and password). Must be provided as user:password'
            cand --etp-rt 'Login with the etp-rt cookie'
            cand --anonymous 'Login anonymously / without an account'
            cand --remove 'Remove your stored credentials (instead of saving them)'
            cand -h 'Print help (see more with ''--help'')'
            cand --help 'Print help (see more with ''--help'')'
        }
        &'crunchy-cli;search'= {
            cand --audio 'Audio languages to include. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN'
            cand --search-top-results-limit 'Limit of search top search results'
            cand --search-series-limit 'Limit of search series results'
            cand --search-movie-listing-limit 'Limit of search movie listing results'
            cand --search-episode-limit 'Limit of search episode results'
            cand --search-music-limit 'Limit of search music results'
            cand -o 'Format of the output text.'
            cand --output 'Format of the output text.'
            cand -h 'Print help (see more with ''--help'')'
            cand --help 'Print help (see more with ''--help'')'
        }
        &'crunchy-cli;help'= {
            cand archive 'Archive a video'
            cand download 'Download a video'
            cand login 'Save your login credentials persistent on disk'
            cand search 'Search in videos'
            cand help 'Print this message or the help of the given subcommand(s)'
        }
        &'crunchy-cli;help;archive'= {
        }
        &'crunchy-cli;help;download'= {
        }
        &'crunchy-cli;help;login'= {
        }
        &'crunchy-cli;help;search'= {
        }
        &'crunchy-cli;help;help'= {
        }
    ]
    $completions[$command]
}
